import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import externalStyles from './styles';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();
  const pageHandle = () => {
    navigation.navigate('SecondScreen');
  };
  const img = require('../../assets/images/OnBoarding01.png');
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.btn_container}
        onPress={() => navigation.navigate('Login')}>
        <Text style={externalStyles.skip_btn}>Skip</Text>
      </TouchableOpacity>
      <Image
        style={externalStyles.onboarding_img}
        source={img}
        resizeMode="contain"
      />
      <Text style={externalStyles.main_heading}>Welcome to Gigl</Text>
      <Text style={externalStyles.text_description}>
        When time matters. Get it done with Gigl.
      </Text>
      <TouchableOpacity
        style={externalStyles.onboarding_btn}
        onPress={() => pageHandle()}>
        <Text style={externalStyles.onboarding_btn_txt}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  btn_container: {},
});
