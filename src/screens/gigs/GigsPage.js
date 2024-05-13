import {Image, ScrollView, StyleSheet, Text, Alert, View} from 'react-native';
import React from 'react';
import {gigs} from '../services/gigs_data';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const GigsPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
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
                    style={{marginLeft: '65%', color: '#000', fontSize: 16}}>
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
                  <Text style={{color: '#000', fontSize: 14}}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.card_description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Button
        text="Post a gig"
        onPress={() => navigation.navigate('GigsDetails')}
      />
    </View>
  );
};

export default GigsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FD',
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
