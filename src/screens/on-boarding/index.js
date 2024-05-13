import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ScrollView, GestureHandlerRootView} from 'react-native-gesture-handler';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

const {width} = Dimensions.get('window');

const OnBoarding = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{width: width * 3}}>
        <View style={[styles.screen]}>
          <FirstScreen />
        </View>
        <View style={[styles.screen]}>
          <SecondScreen />
        </View>
        <View style={[styles.screen]}>
          <ThirdScreen />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  screen: {
    width: width,
  },
});

export default OnBoarding;
