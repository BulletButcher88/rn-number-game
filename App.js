import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOver from './screen/GameOver'

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = (selectedNum) => {
    setUserNumber(selectedNum)
    setGuessRounds(0)
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds)
  }

  let content = userNumber && guessRounds <= 0 ?
    content = (
      guessRounds <= 0 ?
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> :
        <GameOver />
    ) :
    <StartGameScreen onGameProp={startGameHandler} />

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
