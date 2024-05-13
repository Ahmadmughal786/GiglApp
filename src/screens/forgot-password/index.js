import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import OutlinedBtn from '../../components/OutlinedBtn';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const signupHandle = () => {
    navigation.navigate('SignUp');
  };
  const img = require('../../assets/images/Reset_page-logo.png');
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.forgot_logo_img} source={img} />
      <Text style={styles.main_heading}>Reset password</Text>
      <Text style={styles.txt_description}>Please enter your email</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input_field}
          placeholder="Email"
          placeholderTextColor="#7B7D8C"
        />
      </View>
      <Button text="Submit" onPress={() => navigation.navigate('ResetToken')} />
      <OutlinedBtn text="Cancel" />
      <View style={styles.signup_txt_container}>
        <Text style={styles.account_txt}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup_txt} onPress={() => signupHandle()}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  forgot_logo_img: {
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
    marginTop: 10,
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
});
