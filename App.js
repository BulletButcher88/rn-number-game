import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Heater from './components/Header'
import StartGameScreen from './screen/StartGameScreen'

export default function App() {
  return (
    <View style={styles.screen}>
      <Heater title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
