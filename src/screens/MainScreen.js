import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const Img = require('../assets/images/main-logo.png');
  const [delay, setDelay] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (delay) {
      navigation.navigate('OnBoarding');
    }
  }, [delay]);
  return (
    <View style={styles.container}>
      <Image style={styles.logo__img} source={Img} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo__img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
