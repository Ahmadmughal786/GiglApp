import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

const Chats = ({route}) => {
  const img = require('../../assets/icons/send.png');
  const messages = [
    {
      text: 'Message sent to you goes here.',
      time: '12:35 PM',
      type: 'receiver',
    },
    {
      text: 'Message sent to you goes here.',
      time: '12:35 PM',
      type: 'sender',
    },
    {
      text: 'Message sent to you goes here.',
      time: '12:35 PM',
      type: 'receiver',
    },
    {
      text: 'Message sent to you goes here..',
      time: '12:35 PM',
      type: 'receiver',
    },
    {
      text: 'this message was deleted',
      time: '04:30 PM',
      type: 'sender',
    },

    {
      text: 'My name is Mughal.',
      time: '12:05 AM',
      type: 'sender',
    },

    {
      text: 'Hey how are you.',
      time: '01:05 PM',
      type: 'sender',
    },
    {
      text: 'My name is Ahmad.',
      time: '03:06 AM',
      type: 'receiver',
    },
    {
      text: 'Hi.',
      time: '06:01 AM',
      type: 'receiver',
    },
    {
      text: 'Hey how are you.',
      time: '06:35 AM',
      type: 'sender',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.msg_container,
              message.type === 'sender'
                ? styles.msg_sender_container
                : styles.msg_receiver_container,
            ]}>
            <Text style={styles.msg}>{message.text}</Text>
            <Text style={styles.time}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Write a message..."
          placeholderTextColor="#7B7D8C"
        />
        <Image style={styles.send_btn} source={img} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEDF3',
  },
  msg_container: {
    marginVertical: 10,
    padding: 15,
    width: '60%',
    marginRight: 10,
    marginLeft: 10,
    // borderRadius: 20,
  },
  msg_sender_container: {
    alignSelf: 'flex-end',
    backgroundColor: '#F8F8FD',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  msg_receiver_container: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  msg: {
    color: '#000000',
  },
  time: {
    textAlign: 'right',
    fontSize: 12,
    color: '#7B7D8C',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    fontSize: 14,
    marginRight: 10,
  },
  send_btn: {
    resizeMode: 'contain',
  },
});

export default Chats;
