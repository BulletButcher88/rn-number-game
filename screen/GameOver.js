import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Card from '../components/Card';
import ButtonMain from '../components/ButtonMain'
import Colors from '../constants/colors';



const GameOver = props => {

  const DynamicStyles = () => {
    const screenWidth = Dimensions.get('window').width
    return {
      imageContainer: {
        width: screenWidth > 420 ? 150 : 300,
        height: screenWidth > 420 ? 150 : 300,
        borderRadius: screenWidth > 420 ? 75 : 150,
      },
      text: {
        fontSize: screenWidth > 420 ? 20 : 30,
      },
      title: {
        marginBottom: screenWidth > 420 ? 8 : 15,
        fontSize: screenWidth > 420 ? 20 : 30,
      },
      button: {
        marginTop: screenWidth > 420 ? 10 : 80,
      },
    }
  };
  const [imageWidth, setImageWidth] = useState(DynamicStyles)

  useEffect(() => {
    const updateLayout = () => {
      setImageWidth(DynamicStyles)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...imageWidth.title }}>GAME OVER!</Text>
      <View style={{
        ...styles.imageContainer,
        ...imageWidth.imageContainer
      }}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode='cover'
        />
      </View>
      <Text style={{
        ...styles.text,
        ...imageWidth.text
      }}>The number was : {props.userNumber}</Text>
      {props.numGuess - 1 <= 7 ?
        <Text style={{
          ...styles.text,
          ...imageWidth.text
        }}>{`Well done, you did it in ${props.numGuess - 1}`}</Text> :
        <Text style={{
          ...styles.text,
          ...imageWidth.text
        }}>{`${props.numGuess} guesses is too many`}</Text>
      }
      <Card style={imageWidth.button} >
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
    color: Colors.accent,
  },
  title: {
    color: Colors.primary,
    fontFamily: 'open-san-bold'
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'grey',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default GameOver;