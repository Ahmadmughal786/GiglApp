import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectUser, setSelectUser] = useState(undefined);
  const [findData, setFindData] = useState([]);

  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);

  //Get Method
  const displayAPIData = async () => {
    const url = 'http://192.168.0.93:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  //  calling get method
  useEffect(() => {
    displayAPIData();
  }, []);

  useEffect(() => {
    if (selectUser) {
      setName(selectUser.name);
      setAge(selectUser.age.toString());
    }
  }, [selectUser]);

  //Delete method
  const deleteUser = async id => {
    const url = 'http://192.168.0.93:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User Deleted');
      displayAPIData();
    }
  };
  const displayModal = data => {
    setShowModal(true);
    setSelectUser(data);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  //   console.warn(selectUser);

  const updateUser = async () => {
    console.warn(name, age, selectUser.id);
    const url = 'http://192.168.0.93:3000/users';
    const id = selectUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age}),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      displayAPIData();
      setShowModal(false);
    }
  };
  const searchData = async text => {
    const url = `http://192.168.0.93:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    console.warn(url);
    // if (result) {
    //   setFindData(result);
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search..."
        style={styles.search_input}
        onChangeText={text => searchData(text)}
      />

      <ScrollView>
        {data.map((item, index) => (
          <View style={styles.display_data_container} key={index}>
            <Text style={styles.display_txt}>{item.name}</Text>
            <Text style={styles.display_txt}>{item.age}</Text>
            <TouchableOpacity
              style={styles.edit_btn}
              onPress={() => deleteUser(item.id)}>
              <Text style={{color: '#fff'}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.edit_btn}
              onPress={() => displayModal(item)}>
              <Text style={{color: '#fff'}}>Update</Text>
            </TouchableOpacity>
            <Modal visible={showModal} transparent={true}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <View style={styles.modal_box}>
                  <View>
                    <TextInput
                      placeholder="Name"
                      style={styles.text_field}
                      value={name}
                      onChangeText={text => setName(text)}
                    />
                    <TextInput
                      placeholder="Age"
                      style={styles.text_field}
                      value={age}
                      onChangeText={text => {
                        setAge(text);
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#000',
                        width: 60,
                        padding: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}
                      onPress={() => closeModal()}>
                      <Text style={{color: '#fff'}}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#000',
                        width: 60,
                        padding: 10,
                        borderRadius: 10,
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}
                      onPress={updateUser}>
                      <Text style={{color: '#fff'}}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayData;

const styles = StyleSheet.create({
  container: {flex: 0.9, backgroundColor: '#fff'},
  display_data_container: {
    height: 60,
    backgroundColor: '#DC143C',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  display_txt: {
    color: '#fff',
    fontSize: 14,
    // marginLeft: 20,
  },
  edit_btn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  modal_box: {
    backgroundColor: '#DC143C',
    width: 300,
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#fff',
    shadowOpacity: 0.5,
    elevation: 3,
  },
  text_field: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  search_input: {
    borderColor: 'gray',
    margin: 20,
    borderRadius: 30,
    paddingLeft: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    fontSize: 16,
  },
});
