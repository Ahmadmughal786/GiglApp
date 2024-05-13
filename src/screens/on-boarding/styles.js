import {StyleSheet} from 'react-native';

const externalStyles = StyleSheet.create({
  skip_btn: {
    color: '#7B7D8C',
    textAlign: 'right',
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 16,
  },
  onboarding_img: {
    alignSelf: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    marginTop: 80,
    marginHorizontal: 0,
  },
  main_heading: {
    textTransform: 'capitalize',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 25,
    color: '#000000',
  },
  text_description: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
  },
  onboarding_btn: {
    backgroundColor: '#F26333',
    marginHorizontal: 40,
    marginTop: 150,
    padding: 15,
    borderRadius: 30,
  },
  onboarding_btn_txt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  onboarding_heading: {
    textTransform: 'capitalize',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 25,
    color: '#000000',
  },
});
export default externalStyles;
