import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/profile/Profile';
import Messages from '../screens/message/Messages';
import GigsPage from '../screens/gigs/GigsPage';
import {Image, View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom: 25,
          //   left: 20,
          //   right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          //   borderRadius: 15,
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Gigs"
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
        name="Messages"
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
        name="Notifications"
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
                Nofitication
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
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
export default Tabs;
