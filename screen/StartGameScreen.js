import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert, Dimensions, ScrollView } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'
import ButtonMain from '../components/ButtonMain'

const StartGameScreen = (props) => {
  const [enterValue, setEnterValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()
  const [dots, setDots] = useState('.')

  const numberEnterHandler = (text) => {
    setEnterValue(text.replace(/[^0-99]/g, ''))
  }

  const resetHandler = () => {
    setEnterValue('')
    setConfirmed(false)
  }
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid input:',
        'Please ender in a number',
        [{ text: 'TRY AGAIN', style: 'destructive', onPress: resetHandler }])
      return;
    }
    setConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnterValue('')
    Keyboard.dismiss()
  }

  let confirmedOutput;


  if (confirmed) {
    confirmedOutput = <Card style={styles.summaryContainer}>
      <Text style={styles.text}>Your Guess</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <ButtonMain onPress={() => props.onGameProp(selectedNumber)} >Start Game</ButtonMain>
    </Card>
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
        <View style={styles.screen}>
          <Text style={styles.title}>{!enterValue ? 'START A NEW GAME' : "...GUESS WISELY MY FRIEND"}</Text>
          <Card style={styles.inputContainer}>
            <Text style={styles.text}>Select a number between 1 and 99</Text>
            <Input style={styles.input}
              keyboardType='number-pad'
              maxLength={2}
              autoCorrect={false}
              onChangeText={numberEnterHandler}
              value={enterValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="RESET" onPress={resetHandler} color={Colors.accent} />
              </View>
              <View style={styles.button}>
                <Button title="CONFIRM" onPress={confirmInputHandler} color={Colors.primary} />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};

const ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  title: {
    fontSize: ScreenWidth > 420 ? 20 : 30,
    marginBottom: ScreenWidth > 420 ? 10 : 92,
    fontFamily: 'open-san-bold'
  },
  inputContainer: {
    width: ScreenWidth > 420 ? '50%' : '80%',
    minWidth: 300,
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: ScreenWidth > 420 ? 5 : 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: ScreenWidth > 420 ? 3 : 8,
    flexDirection: 'row',

  },
  button: {
    width: ScreenWidth / 4,
  },
  input: {
    width: ScreenWidth > 420 ? 25 : 50,
    textAlign: 'center'
  },
  text: {
    fontSize: ScreenWidth > 420 ? 18 : 28,
    textAlign: 'center',
    fontFamily: 'open-san'
  },
  summaryContainer: {
    marginTop: ScreenWidth > 420 ? 5 : 10
  }
})

export default StartGameScreen;