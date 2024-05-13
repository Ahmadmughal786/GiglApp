import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const InputData = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const sendData = async () => {
    const url = 'http://192.168.0.93:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/type'},
      body: JSON.stringify({name, age}),
    });
    result = await result.json();
    if (result) {
      console.warn('Data send successfuly');
      setName(''), setAge('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#ffffff',
            margin: 10,
          }}>
          Send Data
        </Text>
        <TextInput
          style={styles.input_field}
          placeholder="Name"
          maxLength={5}
          value={name}
          onChangeText={text => {
            setName(text);
          }}
          autoCapitalize="none"
        />
        {/* <TextInput
          style={styles.input_field}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
        /> */}
        <TextInput
          style={styles.input_field}
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          autoCapitalize="none"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#000000',
            padding: 15,
            borderRadius: 30,
            width: '50%',
            alignSelf: 'center',
            margin: 20,
            alignItems: 'center',
          }}
          onPress={sendData}>
          <Text style={{color: '#fff', fontSize: 16}}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigation.navigate('DisplayData')}>
          <Text style={{color: '#fff', textDecorationLine: 'underline'}}>
            Display Data
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InputData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_container: {
    height: 350,
    backgroundColor: '#DC143C',
    width: '80%',
    borderRadius: 30,
  },
  input_field: {
    // borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 15,
    fontSize: 16,
  },
});
