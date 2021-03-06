import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const ButtonMain = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...props.style, ...styles.button }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 100,

  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-san',
    textAlign: 'center',
    fontSize: 20
  }
})

export default ButtonMain