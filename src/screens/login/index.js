import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const social_icons = [
  {
    icon: require('../../assets/icons/facebook_icon.png'),
    icon_txt: 'Continue with Facebook',
  },
  {
    icon: require('../../assets/icons/google_icon.png'),
    icon_txt: 'Continue with Google',
  },
  {
    icon: require('../../assets/icons/apple_icon.png'),
    icon_txt: 'Continue with Apple',
  },
];

const Login = () => {
  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate('SignUp');
  };
  const handleForgotPage = () => {
    navigation.navigate('ForgotPassword');
  };
  const mainImg = require('../../assets/images/login-page-logo.png');
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.login_page_logo} source={mainImg} />
      <Text style={styles.main_heading}>Welcome Back!</Text>
      <Text style={styles.txt_description}>
        Please login to continue using our app
      </Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input_field}
          placeholder="Email"
          placeholderTextColor="#7B7D8C"
        />
        <TextInput
          style={styles.input_field}
          placeholder="Password"
          placeholderTextColor="#7B7D8C"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot_pass_txt}
            onPress={() => handleForgotPage()}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <Button text="Login" />
      <Text style={styles.other_txt}>or login with</Text>
      {social_icons.map((item, index) => (
        <TouchableOpacity style={styles.social_btns_container} key={index}>
          <Image style={styles.social_icons} source={item.icon} />
          <Text style={styles.social_btn_txt}>{item.icon_txt}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.signup_txt_container}>
        <Text style={styles.account_txt}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup_txt} onPress={() => handleSignup()}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  login_page_logo: {
    marginTop: 30,
    alignSelf: 'center',
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
  forgot_pass_txt: {
    textAlign: 'right',
    marginRight: 8,
    color: '#000000',
    fontSize: 14,
  },
  other_txt: {
    textAlign: 'center',
    fontSize: 14,
  },
  social_btns_container: {
    flexDirection: 'row',
    backgroundColor: '#F8F8FD',
    padding: 15,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  social_icons: {
    marginLeft: 10,
  },
  social_btn_txt: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
    color: '#000000',
  },
  signup_txt_container: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
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
