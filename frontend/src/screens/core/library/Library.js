import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Library = () => {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Library
