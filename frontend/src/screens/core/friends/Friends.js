import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { auth, db} from '../../../firebase/Firebase'
import { collection, getDocs } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const Friends = () => {
  const navigation = useNavigation();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const userId = auth.currentUser.uid; // Get the user's ID
      const contactsRef = collection(db, 'contacts');
      const snapshot = await getDocs(contactsRef);

      if (snapshot.empty) {
        console.log('No contacts found.');
        return;
      }

      const userContacts = snapshot.docs
        .filter((doc) => doc.id === userId)
        .map((doc) => doc.data().contacts);

      setFriends(userContacts);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  const renderFriendItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.phoneNumber}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFriendItem}
      />
    </View>
  );
};

export default Friends
