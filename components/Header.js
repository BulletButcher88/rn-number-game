import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors'

const Heater = (props) => {

  const [headerDimension, setHeaderDimension] = useState({
    height: Dimensions.get('window').width > 420 ? 60 : 90,
    paddingTop: Dimensions.get('window').width > 420 ? 10 : 36
  })
  const updateDimensions = () => {
    setHeaderDimension({
      height: Dimensions.get('window').width > 420 ? 60 : 90,
      paddingTop: Dimensions.get('window').width > 420 ? 10 : 36
    })
  }

  useEffect(() => {
    Dimensions.addEventListener('change', updateDimensions)
    return () => {
      Dimensions.removeEventListener('change', updateDimensions)
    }
  })

  return (
    <View style={{ ...styles.headerContainer, ...headerDimension }}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: Colors.theme,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: Dimensions.get('window').width > 420 ? 19 : 22
  }
})

export default Heater;