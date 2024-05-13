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

const ThirdScreen = () => {
  const navigation = useNavigation();
  const pageHandle = () => {
    navigation.navigate('Login');
  };
  const img = require('../../assets/images/OnBoarding03.png');
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.btn_container}
        onPress={() => pageHandle()}>
        <Text style={externalStyles.skip_btn}>Skip</Text>
      </TouchableOpacity>
      <Image
        style={externalStyles.onboarding_img}
        source={img}
        resizeMode="contain"
      />
      <Text style={externalStyles.onboarding_heading}>Heading</Text>
      <Text style={externalStyles.text_description}>
        When time matters. Get it done with Gigl.
      </Text>
      <TouchableOpacity
        style={externalStyles.onboarding_btn}
        onPress={() => pageHandle()}>
        <Text style={externalStyles.onboarding_btn_txt}>Let’s get started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
