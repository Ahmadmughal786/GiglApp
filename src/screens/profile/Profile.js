import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {gigs} from '../services/gigs_data';

const my_gigs = [
  {
    imgUrl: require('../../assets/images/gigs-img.png'),
    title: 'My Gig’s',
    price: '300$',
    loc_text: 'Location',
    time: 'Time - Day',
    description:
      'Description goes here. Description goes here. Description goes here. ',
  },
  {
    imgUrl: require('../../assets/images/gigs-img.png'),
    title: 'My Gig’s',
    price: '900$',
    loc_text: 'Location',
    time: 'Time - Day',
    description:
      'Description goes here. Description goes here. Description goes here. ',
  },
];

const Profile = () => {
  const [selectTab, setSelectTab] = useState(0);
  const profileImg = require('../../assets/images/p1.jpg');
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.profile_img} source={profileImg} />
      <Text style={styles.user_name}>Name</Text>
      <AirbnbRating
        showRating={false}
        defaultRating={3}
        size={12}
        selectedColor="#F26333"
      />

      {/* switch buttons  */}

      <View style={styles.switch_container}>
        <TouchableOpacity
          style={{
            backgroundColor: selectTab == 0 ? '#ECEDF3' : '#F8F8FD',
            width: '50%',
            borderRadius: 30,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            setSelectTab(0);
          }}>
          <Text
            style={{
              color: selectTab == 0 ? '#000000' : '#7B7D8C',
            }}>
            Gigs posted by me
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: selectTab == 1 ? '#ECEDF3' : '#F8F8FD',
            width: '50%',
            borderRadius: 30,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            setSelectTab(1);
          }}>
          <Text style={{color: selectTab == 1 ? '#000000' : '#7B7D8C'}}>
            Gigs done by me
          </Text>
        </TouchableOpacity>
      </View>

      {/* gigs */}

      <ScrollView style={styles.scrollViewContent}>
        {selectTab == 0 ? (
          <View>
            {gigs.map((item, index) => (
              <View style={[styles.card, styles.shadowProp]} key={index}>
                {/* 1 */}
                <Image source={item.imgUrl} />
                {/* 2 */}
                <View style={styles.card_sec_container}>
                  <View style={styles.first_inner_container}>
                    <View>
                      <Text style={styles.gigs_heading}>{item.title}</Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          marginLeft: '65%',
                          color: '#000',
                          fontSize: 16,
                        }}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.first_inner_container}>
                    <View>
                      <Text style={{color: '#F26333', fontSize: 14}}>
                        {item.loc_text}
                      </Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                      <Text style={{color: '#000', fontSize: 14}}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.card_description}>
                    {item.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View>
            <View>
              {my_gigs.map((item, index) => (
                <View style={[styles.card, styles.shadowProp]} key={index}>
                  {/* 1 */}
                  <Image source={item.imgUrl} />
                  {/* 2 */}
                  <View style={styles.card_sec_container}>
                    <View style={styles.first_inner_container}>
                      <View>
                        <Text style={styles.gigs_heading}>{item.title}</Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            marginLeft: '65%',
                            color: '#000',
                            fontSize: 16,
                          }}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.first_inner_container}>
                      <View>
                        <Text style={{color: '#F26333', fontSize: 14}}>
                          {item.loc_text}
                        </Text>
                      </View>
                      <View style={{marginLeft: 10}}>
                        <Text style={{color: '#000', fontSize: 14}}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.card_description}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  profile_img: {
    borderRadius: 50,
    // borderWidth: 1,
    borderColor: 'black',
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  user_name: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 5,
  },
  switch_container: {
    width: '80%',
    height: 40,
    backgroundColor: '#F8F8FD',
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    // borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingVertical: 5,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  card_sec_container: {
    marginLeft: 8,
  },
  first_inner_container: {
    flexDirection: 'row',
  },
  gigs_heading: {
    color: '#000',
    fontSize: 16,
  },
  card_description: {
    maxWidth: '92%',
    color: '#7B7D8C',
    fontSize: 12,
  },
});
