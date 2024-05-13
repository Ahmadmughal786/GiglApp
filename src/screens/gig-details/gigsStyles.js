import {StyleSheet} from 'react-native';

const gigStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profile_container: {
    flexDirection: 'row',
    marginTop: 15,
  },
  profile_txt: {
    // margin: 5,
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
  },
  header_img: {
    marginTop: 15,
    marginBottom: 10,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gigs_title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  gig_price: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  time_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#7B7D8C',
  },
  loc_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  input_container: {
    marginVertical: 10,
  },

  input_field: {
    backgroundColor: '#ffffff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    // Box Shadow for iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Box Shadow for Android
    elevation: 3,
  },
});

export default gigStyle;
