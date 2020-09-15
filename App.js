import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font'
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOver from './screen/GameOver'

const fetchFonts = () => {
  Font.loadAsync({
    'open-san': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-san-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoader, setDataLoader] = useState(false);

  if (!dataLoader) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoader(true)}
        onError={(err) => console.log(err)} />)
  }

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const startGameHandler = (selectedNum) => {
    setUserNumber(selectedNum)
    setGuessRounds(0)
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = guessRounds <= 0 ?
    content = (
      guessRounds >= 0 && userNumber ?
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> :
        <StartGameScreen onGameProp={startGameHandler} />
    ) :
    <GameOver numGuess={guessRounds} userNumber={userNumber} newGameHandler={newGameHandler} />

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
