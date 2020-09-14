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

  let content = guessRounds <= 0 ?
    content = (
      guessRounds >= 0 && userNumber ?
        <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> :
        <StartGameScreen onGameProp={startGameHandler} />
    ) :
    <GameOver numGuess={guessRounds} />

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
