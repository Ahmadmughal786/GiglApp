import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const Messages = () => {
  const notifications = [
    {
      profilePic: require('../../assets/images/profile.png'),
      name: 'Ahmad',
      message:
        'Last message goes here. Last message goes here. Last message goes here. ',
      time: 'Time-Day',
    },

    {
      name: 'Ali',
      message:
        'Last message goes here. Last message goes here. Last message goes here. ',
      time: 'Time-Day',
    },
    {
      name: 'Haseeb',
      message:
        'Last message goes here. Last message goes here. Last message goes here. ',
      time: 'Time-Day',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingVertical: 10}}>
        {notifications.map((item, index) => (
          <View style={styles.message_box} key={index}>
            <Image
              style={styles.profile_pic}
              source={require('../../assets/images/profile.png')}
            />
            <View style={{marginLeft: 10, maxWidth: '80%'}} key={index}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.user_name}>{item.name}</Text>
                <Text style={styles.message_date}>{item.time}</Text>
              </View>
              <Text style={styles.user_message}>{item.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FD',
  },
  message_box: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 15,
    marginTop: 1,
  },
  profile_pic: {
    borderRadius: 50,
  },
  user_name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  user_message: {
    color: '#7B7D8C',
    fontSize: 14,
  },
  message_date: {
    color: '#7B7D8C',
    fontSize: 12,
  },
});
