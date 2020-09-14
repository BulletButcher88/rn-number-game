import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GAME OVER!</Text>
      {props.numGuess < 4 ?
        <Text style={styles.text}>{`Well done, you did it in ${props.numGuess}`}</Text> :
        <Text style={styles.text}>{`${props.numGuess} guesses is a too many`}</Text>
      }
    </View >
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  text: {
    fontSize: 30,
    padding: 10
  }
})

export default GameOver;