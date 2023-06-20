import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../../firebase/Firebase'
import {  doc, setDoc } from 'firebase/firestore';
import * as Contacts from 'expo-contacts';

const ContactImportScreen = () => {
  const navigation = useNavigation();

  const navigateToLocationScreen = () => {
    navigation.navigate('Location');
  };

  useEffect(() => {
    checkContactPermission();
  }, []);

  const checkContactPermission = async () => {
    // Check if contact permission is already granted
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === 'granted') {
      navigateToLocationScreen();
    }
  };

  const importContacts = async () => {
    // Request permission to access contacts
    const { status } = await Contacts.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant permission to access contacts.');
      navigateToLocationScreen();
      return;
    }

    // Retrieve contacts
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    if (data.length > 0) {
      // Extract necessary information from contacts
      const contacts = data.map((contact) => ({
        name: contact.name,
        phoneNumber: contact.phoneNumbers && contact.phoneNumbers[0]?.number,
      }));

      // Save contacts to Firebase
      const userId = auth.currentUser.uid; // Get the user's ID
      const contactsRef = doc(db, 'contacts', userId);

      await setDoc(contactsRef, { contacts });

      Alert.alert('Contacts Imported', 'Your contacts have been imported successfully.');
    } else {
      Alert.alert('No Contacts', 'There are no contacts to import.');
    }

    navigateToLocationScreen();
  };

  return (
    <View>
      <Button title="Import Contacts" onPress={importContacts} />
    </View>
  );
};

export default ContactImportScreen;
