import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import gigStyle from './gigsStyles';
import StepIndicator from 'react-native-step-indicator';
import {AirbnbRating} from 'react-native-ratings';
import Button from '../../components/Button';

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
          <Text style={{color: '#000000', marginLeft: 20}}>Time - Date</Text>
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

const styles = StyleSheet.create({});

export default GigsDetails;
