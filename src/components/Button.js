import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btn__txt}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26333',
    padding: 18,
    borderRadius: 30,
    margin: 20,
  },
  btn__txt: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
  },
});
