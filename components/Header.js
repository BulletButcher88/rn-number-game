import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors'

const Heater = (props) => {
  const DynamicStyles = () => {
    const screenWidth = Dimensions.get('window').width
    return {
      height: screenWidth > 420 ? 60 : 90,
      paddingTop: screenWidth > 420 ? 10 : 36,
      backgroundColor: screenWidth > 420 ? Colors.theme : Colors.primary,
    }
  };

  const [headerDimension, setHeaderDimension] = useState(DynamicStyles)
  const updateDimensions = () => {
    setHeaderDimension(DynamicStyles)
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: Dimensions.get('window').width > 420 ? 19 : 22
  }
})

export default Heater;