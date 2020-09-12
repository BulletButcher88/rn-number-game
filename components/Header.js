import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'

const Heater = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.theme,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22
  }
})

export default Heater;