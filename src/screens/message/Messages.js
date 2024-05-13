import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Messages = () => {
  const navigation = useNavigation();

  const messages = [
    {
      profilePic: require('../../assets/images/profile.png'),
      name: 'Ahmad',
      message: 'Last message goes here...',
    },
    {
      profilePic: require('../../assets/images/profile.png'),
      name: 'Ahmad',
      message: 'this message was deleted...',
    },
    {
      profilePic: require('../../assets/images/profile.png'),
      name: 'Ahmad',
      message: 'Last message goes here...',
    },
  ];

  const handlePress = name => {
    navigation.navigate('Chats', {userName: name});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingVertical: 10}}>
        {messages.map((item, index) => (
          <TouchableOpacity
            style={styles.message_box}
            key={index}
            onPress={() => handlePress(item.name)}>
            <Image style={styles.profile_pic} source={item.profilePic} />
            <View style={{marginLeft: 10, maxWidth: '80%'}}>
              <Text style={styles.user_name}>{item.name}</Text>
              <Text style={styles.user_message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
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
    width: 50,
    height: 50,
  },
  user_name: {
    fontSize: 16,
    fontWeight: '500',
  },
  user_message: {
    color: '#7B7D8C',
    fontSize: 14,
  },
});
