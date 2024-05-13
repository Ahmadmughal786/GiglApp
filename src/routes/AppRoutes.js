import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import CreateProfile from '../screens/create-profile';
import MainScreen from '../screens/MainScreen';
import Onboarding from '../screens/on-boarding';
import ForgotPassword from '../screens/forgot-password';
import GigsPage from '../screens/gigs/GigsPage';
import Messages from '../screens/message/Messages';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/profile/Profile';
import {View, Text, Image} from 'react-native';
import ResetPasswordToken from '../screens/forgot-password/ResetPasswordToken';
import NewPassword from '../screens/forgot-password/NewPassword';
import Chats from '../screens/message/Chats';
import SecondScreen from '../screens/on-boarding/SecondScreen';
import ThirdScreen from '../screens/on-boarding/ThirdScreen';
import FirstScreen from '../screens/on-boarding/FirstScreen';
import GigsDetails from '../screens/gig-details/GigsDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const GigsTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 80,
        },
      }}>
      <Tab.Screen
        name="GIGS"
        component={GigsPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/gigl.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#F26333' : '#C9CAD1',
                }}
              />
              <Text
                style={{color: focused ? '#F26333' : '#C9CAD1', fontSize: 12}}>
                Gigs
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MESSAGES"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/message.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#F26333' : '#C9CAD1',
                }}
              />
              <Text
                style={{color: focused ? '#F26333' : '#C9CAD1', fontSize: 12}}>
                Messages
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NOTIFICATIONS"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/notification.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#F26333' : '#C9CAD1',
                }}
              />
              <Text
                style={{color: focused ? '#F26333' : '#C9CAD1', fontSize: 12}}>
                Notifications
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/profile.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#F26333' : '#C9CAD1',
                }}
              />
              <Text
                style={{color: focused ? '#F26333' : '#C9CAD1', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="MainScreen"
          options={{headerShown: false}}
          component={MainScreen}
        />
        <Stack.Screen
          name="OnBoarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
        <Stack.Screen
          name="FirstScreen"
          options={{headerShown: false}}
          component={FirstScreen}
        />
        <Stack.Screen
          name="SecondScreen"
          options={{headerShown: false}}
          component={SecondScreen}
        />
        <Stack.Screen
          name="ThirdScreen"
          options={{headerShown: false}}
          component={ThirdScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{headerShown: false}}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="CreateProfile"
          options={{headerShown: false}}
          component={CreateProfile}
        />
        <Stack.Screen
          name="GigsPage"
          options={{headerShown: false, headerTitleAlign: 'center'}}
          component={GigsTabNavigator}
        />
        <Stack.Screen
          name="ResetToken"
          options={{headerShown: false}}
          component={ResetPasswordToken}
        />
        <Stack.Screen
          name="NewPassword"
          options={{headerShown: false}}
          component={NewPassword}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={({navigation}) => ({
            title: 'Name',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={{marginRight: 15}}>
                <Image
                  source={require('../assets/images/profile.png')}
                  style={{width: 40, height: 40, borderRadius: 20}}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="GigsDetails"
          options={{
            title: 'GIG DETAILS',
            headerShown: true,
            headerTitleAlign: 'center',
          }}
          component={GigsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
