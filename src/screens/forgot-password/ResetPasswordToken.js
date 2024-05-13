import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import OutlinedBtn from '../../components/OutlinedBtn';
import ResetBtn from '../../components/ResetBtn';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordToken = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(32);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(intervalId);
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.charAt(value.length - 1);
    }

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value !== '2') {
      inputRefs[index].current.setNativeProps({
        style: {borderColor: '#F26333'},
      });
    } else {
      inputRefs[index].current.setNativeProps({
        style: {borderColor: '#CCCCCC'},
      });
    }

    if (index < inputRefs.length - 1 && value.length > 0) {
      inputRefs[index + 1].current.focus();
    }
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };
  const img = require('../../assets/images/Reset_page-logo.png');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.forgot_logo_img} source={img} />
      <Text style={styles.main_heading}>Reset password</Text>
      <Text style={styles.txt_description}>Please enter 4 digit code</Text>
      <View style={styles.input_container}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={[
              styles.input_field,
              {
                borderColor:
                  digit !== '' && digit !== '2' ? '#F26333' : '#CCCCCC',
              },
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={digit}
            onChangeText={value => handleChange(index, value)}
            editable={true}
            autoComplete="off"
          />
        ))}
      </View>

      {code.some(digit => digit !== '' && digit !== '2') && (
        <Text style={styles.code_txt}>Code you entered is not correct</Text>
      )}
      <Text style={styles.code_counter}>
        Resend Token after {formatTime(timer)}
      </Text>
      <ResetBtn
        text="Submit"
        onPress={() => navigation.navigate('NewPassword')}
      />
      <ResetBtn text="Resend Token" />

      <OutlinedBtn text="Cancel" />
    </SafeAreaView>
  );
};

export default ResetPasswordToken;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  forgot_logo_img: {
    alignSelf: 'center',
    margin: 60,
  },
  main_heading: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 15,
    color: '#000000',
    // marginTop: 20,
    // marginBottom: 10,
  },
  txt_description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
  },
  input_container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  input_field: {
    backgroundColor: '#F8F8FD',
    marginBottom: 10,
    borderRadius: 10,
    height: 90,
    width: 60,
    fontSize: 30,
    textAlign: 'center',
    borderColor: '#F26333',
    borderWidth: 1,
  },
  code_txt: {
    textAlign: 'center',
    color: '#F26333',
    fontSize: 14,
  },
  code_counter: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 15,
  },
});
