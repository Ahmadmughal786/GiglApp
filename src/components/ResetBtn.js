import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ResetBtn = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btn__txt}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ResetBtn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F26333',
    padding: 18,
    borderRadius: 30,
    marginHorizontal: 20,
    // marginVertical: ,
    marginBottom: 20,
  },
  btn__txt: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
  },
});
