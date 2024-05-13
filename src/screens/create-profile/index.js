import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import OutlinedBtn from '../../components/OutlinedBtn';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const CreateProfile = () => {
  const navigation = useNavigation();
  const loginHandle = () => {
    navigation.navigate('Login');
  };
  const [email, setEmail] = useState('user@gmail.com');
  const profileImg = require('../../assets/images/p2.jpg');
  const [profileImage, setProfileImage] = useState('');

  const selectImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.error) {
        console.log(response.error);
        return;
      }
      console.log('Image', response.assets[0]);
      setProfileImage(response.assets[0]);
    });
  };

  const defaultImgSource = require('../../assets/images/p2.jpg');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View>
        <TouchableOpacity onPress={selectImage}>
          <Image
            source={
              profileImage
                ? {
                    uri: `data:${profileImage.type};base64,${profileImage.base64}`,
                  }
                : defaultImgSource
            }
            style={styles.profile_img}
          />
          {/* <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 12,
              color: '#000000',
            }}>
            Upload picture
          </Text> */}
        </TouchableOpacity>
      </View>

      <Text style={styles.main_heading}>Create Profile</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input_field}
          placeholder="Full name"
          placeholderTextColor="#7B7D8C"
        />
        <TextInput
          style={styles.input_field}
          placeholder="Email"
          placeholderTextColor="#7B7D8C"
          value={email}
          editable={false}
        />
        <TextInput
          style={styles.input_field}
          placeholder="Phone number"
          placeholderTextColor="#7B7D8C"
        />
        <TextInput
          style={styles.input_field}
          placeholder="Address"
          placeholderTextColor="#7B7D8C"
          secureTextEntry={true}
        />
      </View>
      <OutlinedBtn text="+ Upload ID" />
      <Button
        text="Save profile"
        onPress={() => {
          navigation.navigate('GigsPage');
        }}
      />
      <View style={styles.signup_txt_container}>
        <Text style={styles.account_txt}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup_txt} onPress={() => loginHandle()}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  profile_img: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
  },
  main_heading: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    color: '#000000',
    // marginTop: 20,
    // marginBottom: 10,
  },
  input_container: {
    margin: 20,
  },
  input_field: {
    backgroundColor: '#F8F8FD',
    padding: 15,
    marginBottom: 10,
    borderRadius: 30,
    fontSize: 14,
  },
  signup_txt_container: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
    // flex: 0.1,
    marginTop: 10,
  },
  signup_txt: {
    color: '#F26333',
    fontSize: 14,
    marginLeft: 2,
  },
  account_txt: {
    color: '#000000',
    fontSize: 14,
  },
});
