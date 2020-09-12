import React from 'react';
import { View, Text, StyleSheet, ImagePropTypes } from 'react-native'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.22,
    backgroundColor: 'white',
    elevation: 8,
    padding: 4,
    borderRadius: 20
  }
})

export default Card