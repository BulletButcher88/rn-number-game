import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input'

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>START A NEW GAME</Text>
      <Card style={styles.inputContainer}>
        <Text>Guess a Number</Text>
        <Input style={styles.input} keyboardType='number-pad' maxLength={2} autoCorrect={false} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="RESET" onPress={() => { }} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="CONFIRM" onPress={() => { }} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 24
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 8,
    flexDirection: 'row',

  },
  button: {
    width: 120,
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
})

export default StartGameScreen;