import React, { useState } from 'react';
import { Button, TextInput, Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../../firebase/Firebase'

const Register = () => {
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const signInWithPhoneNumber = async (phoneNumber) => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      Alert.alert('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={text => setPhone(text)}
          value={phone}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={() => signInWithPhoneNumber(phone)}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Confirmation Code"
        onChangeText={text => setCode(text)}
        value={code}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => confirmCode()}>
        <Text style={styles.buttonText}>Confirm Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Register;

