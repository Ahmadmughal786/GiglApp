import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes';
import InputData from './src/api/InputData';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DisplayData from './src/api/DisplayData';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <AppRoutes />
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="InputData">
          <Stack.Screen
            name="InputData"
            component={InputData}
            options={{
              title: 'INPUT DATA',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="DisplayData"
            component={DisplayData}
            options={{title: 'DISPLAY DATA', headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
