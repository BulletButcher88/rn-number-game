import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Platform } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/colors'

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Header = (props) => {
  const DynamicStyles = () => {
    const screenWidth = Dimensions.get('window').width
    return {
      headerContainer: {
        height: screenWidth > 420 ? 60 : 90,
        paddingTop: screenWidth > 420 ? 10 : 36,
        backgroundColor: screenWidth > 420 ? Colors.primary : Colors.accent,
      }, text: {
        fontSize: screenWidth > 420 ? 19 : 32,
        color: 'white',
      }
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
    <AnimatedLinearGradient
      colors={["rgba(255,255,255, 0)", "rgba(255,215,255, 0.8)"]}
      style={{ ...styles.headerContainer, ...headerDimension.headerContainer }}
    >
      <Text style={{ ...styles.text, ...headerDimension.text }}>{props.title}</Text>
    </AnimatedLinearGradient>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 5 : 0
  }
})

export default Header;