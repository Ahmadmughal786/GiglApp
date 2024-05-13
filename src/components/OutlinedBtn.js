import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const OutlinedBtn = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btn__txt}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#F26333',
    borderWidth: 1,
    padding: 18,
    borderRadius: 30,
    margin: 20,
    marginTop: 0,
  },
  btn__txt: {
    textAlign: 'center',
    color: '#F26333',
    fontSize: 14,
  },
});
