import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../../firebase/Firebase'
import {  doc, setDoc } from 'firebase/firestore';
import * as ExpoLocation from 'expo-location';


const Location = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    // Check if location permission is already granted
    const { status } = await ExpoLocation.getForegroundPermissionsAsync();

    if (status === 'granted') {
      navigateToHome();
    }
  };

  const requestLocationPermission = async () => {
    // Request permission to access location
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant permission to access location.');
      navigateToHome();
      return;
    }

    // Get current location
    const location = await ExpoLocation.getCurrentPositionAsync({});

    // Save location to Firebase
    const userId = auth.currentUser.uid; // Get the user's ID
    const locationRef = doc(db, 'locations', userId);

    await setDoc(locationRef, {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    navigateToHome();
  };


  return (
    <View>
      <Button title="Grant Location Access" onPress={requestLocationPermission} />
    </View>
  );
};

export default Location
