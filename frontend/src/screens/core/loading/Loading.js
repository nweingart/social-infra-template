import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
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

export default Loading
