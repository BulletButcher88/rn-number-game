import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNum) => {
    setUserNumber(selectedNum)
  };

  let content = userNumber ?
    content = <GameScreen userChoice={userNumber} /> : <StartGameScreen onGameProp={startGameHandler} />

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
