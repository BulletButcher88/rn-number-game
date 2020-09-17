import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import ButtonMain from '../components/ButtonMain'
import Colors from '../constants/colors';

const GameOver = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GAME OVER!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode='cover'
        />
      </View>
      <Text style={styles.text}>The number was : {props.userNumber}</Text>
      {props.numGuess < 4 ?
        <Text style={styles.text}>{`Well done, you did it in ${props.numGuess}`}</Text> :
        <Text style={styles.text}>{`${props.numGuess} guesses is too many`}</Text>
      }
      <Card style={styles.button} >
        <ButtonMain onPress={props.newGameHandler}>New Game</ButtonMain>
      </Card>
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
    marginVertical: 5,
    fontSize: 30,
    color: Colors.accent,
  },
  title: {
    marginBottom: 15,
    fontSize: 30,
    color: Colors.primary,
    fontFamily: 'open-san-bold'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 150,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 80,
  },

})

export default GameOver;