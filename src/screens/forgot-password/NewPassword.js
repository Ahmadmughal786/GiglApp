import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const NewPassword = () => {
  //Top Icon Image
  const img = require('../../assets/images/signup-page-logo.png');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <Image style={styles.signup_logo_img} source={img} />
      <Text style={styles.main_heading}>Reset Password</Text>
      <Text style={styles.txt_description}>Please enter new password</Text>

      {/* Input field Container  */}
      {/* Email Input Field */}
      <View style={styles.input_container}>
        <TextInput
          style={styles.input_field}
          placeholder="New password"
          placeholderTextColor="#7B7D8C"
          autoCapitalize={false}
          secureTextEntry={true}
        />
        {/* Password Input Field */}
        <TextInput
          style={styles.input_field}
          placeholder="Confirm password"
          placeholderTextColor="#7B7D8C"
          secureTextEntry={true}
        />
      </View>

      {/* Sign Up Button */}
      <Button
        text="Update Password"
        onPress={() => navigation.navigate('Login')}
      />
      {/* <TouchableOpacity style={styles.btn_container}>
        <Text
          style={styles.btn__txt}
          onPress={() => navigation.navigate('CreateProfile')}>
          
        </Text>
      </TouchableOpacity> */}

      {/* Last Text with Button */}
      <View style={styles.signup_txt_container}>
        <Text style={styles.account_txt}>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            style={styles.signup_txt}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  signup_logo_img: {
    alignSelf: 'center',
    margin: 60,
  },
  main_heading: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 15,
    color: '#000000',
    // marginTop: 20,
    // marginBottom: 10,
  },
  txt_description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
  },
  input_container: {
    margin: 20,
  },
  input_field: {
    backgroundColor: '#F8F8FD',
    padding: 15,
    marginBottom: 10,
    borderRadius: 30,
    fontSize: 14,
  },
  signup_txt_container: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
    // flex: 0.1,
    marginTop: '38%',
  },
  signup_txt: {
    color: '#F26333',
    fontSize: 14,
    marginLeft: 2,
  },
  account_txt: {
    color: '#000000',
    fontSize: 14,
  },
  btn_container: {
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
