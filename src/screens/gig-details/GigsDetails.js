import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import gigStyle from './gigsStyles';
import StepIndicator from 'react-native-step-indicator';
import {AirbnbRating} from 'react-native-ratings';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  separatorVerticalSpace: 25,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const GigsDetails = () => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  );
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('2024/05/13');

  const handleOnPress = () => {
    setOpen(!open);
  };
  const handleChange = propDate => {
    setDate(propDate);
  };
  const [currentStep, setCurrentStep] = useState(0);

  const [dummyData, setDummyData] = useState([
    {
      label: 'On the way',
      status: 'This is the content within step 1!',
    },
    {
      label: 'Arrived',
      status: 'This is the content within step 2!',
    },
    {
      label: 'Ended gig',
      status: 'This is the content within step 3!',
    },
  ]);

  const [location, setLocation] = useState('00 Lorem Ipsum, CA, 0000');
  const [number, setNumber] = useState('+(123) 123 456 789');
  const img = require('../../assets/icons/details-profile-pic.png');
  const header = require('../../assets/images/gigs-details-header.png');
  const locIcon = require('../../assets/icons/location.png');
  const navigation = useNavigation();

  const onNextPress = () => {
    // Move to the next step
    if (currentStep < dummyData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <SafeAreaView style={gigStyle.container}>
      <View style={{marginHorizontal: 20, alignSelf: 'center'}}>
        <View style={gigStyle.profile_container}>
          <Image source={img} />
          <View
            style={{justifyContent: 'center', marginLeft: 8, marginBottom: 5}}>
            <Text style={gigStyle.profile_txt}>Gigler</Text>
            <AirbnbRating
              showRating={false}
              defaultRating={3}
              size={10}
              selectedColor="#F26333"
            />
          </View>
        </View>
        <Image style={gigStyle.header_img} source={header} />
        <View style={gigStyle.header_container}>
          <Text style={gigStyle.gigs_title}>Gig’s title</Text>
          <Text style={gigStyle.gig_price}>$200.00</Text>
        </View>
        <View style={gigStyle.time_container}>
          <Text style={{color: '#000000'}}>ID</Text>
          <TouchableOpacity onPress={handleOnPress}>
            <Text style={{color: '#000000', marginLeft: 20}}>Time - Date</Text>
          </TouchableOpacity>

          {/* Modal  */}
          <View style={styles.modal_container}>
            <Modal animationType="slide" transparent={true} visible={open}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    selected={date}
                    minimumDate={startDate}
                    onDateChanged={handleChange}
                  />
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <StatusBar style="auto" />
          </View>
        </View>
        <Text style={gigStyle.description}>
          Description description description description description
        </Text>
        <View style={gigStyle.loc_container}>
          <Image source={locIcon} />
          <Text style={{marginLeft: 5, color: '#F26333'}}>Location</Text>
        </View>
        <View style={gigStyle.input_container}>
          <TextInput style={gigStyle.input_field} value={location} />
          <TextInput style={gigStyle.input_field} value={number} />
        </View>

        {/* Step Indicator */}
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentStep}
          labels={dummyData.map(item => item.label)}
          stepCount={dummyData.length}
        />

        {/* Next Button */}
        <Button onPress={onNextPress} text="Mark as complete" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default GigsDetails;
