import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import ButtonMain from '../components/ButtonMain';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNum
  }
}

const listOfGuesses = (value, numOfRounds) => {
  return (
    <View key={value} style={styles.listItems}>
      <Text style={styles.listText}>#{numOfRounds} </Text>
      <Text style={styles.listText}>{value}</Text>
    </View>)
}

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [passGuesses, setPassGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { onGameOver, userChoice } = props

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(passGuesses.length)
    }
  }, [currentGuess, onGameOver, userChoice]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don/'t Lie!", "You know this is wrong...", [
        { text: 'Sorry', style: 'cancel' }
      ])
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber)
    // setRounds(currentRound => currentRound + 1)
    setPassGuesses(curPassGuesses => [nextNumber, ...curPassGuesses])
  }
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <ButtonMain onPress={nextGuessHandler.bind(this, 'lower')} >
          <AntDesign name="minuscircleo" size={30} />
        </ButtonMain>
        <ButtonMain onPress={nextGuessHandler.bind(this, 'greater')} >
          <AntDesign name="pluscircleo" size={30} />
        </ButtonMain>
      </Card>
      <ScrollView>
        {passGuesses.map((guess, index) => listOfGuesses(guess, passGuesses.length - index))}
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 300,
    maxWidth: '80%'
  },
  listText: {
    color: 'white',
    fontSize: 26
  },
  listItems: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'grey',
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    borderRadius: 200
  }
})

export default GameScreen;