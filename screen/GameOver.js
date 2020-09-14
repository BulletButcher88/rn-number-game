import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text>GAME OVER</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20
  }
})

export default GameOver;