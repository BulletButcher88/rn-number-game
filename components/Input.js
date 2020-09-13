import React from 'react';

import { TextInput, StyleSheet, ImagePropTypes } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
}

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 50,
  }
})

export default Input;