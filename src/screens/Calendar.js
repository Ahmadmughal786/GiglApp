// import {
//   Modal,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import DatePicker from 'react-native-modern-datepicker';
// import {getToday, getFormatedDate} from 'react-native-modern-datepicker';

// const Calendar = () => {
//   const today = new Date();
//   const startDate = getFormatedDate(
//     today.setDate(today.getDate() + 1),
//     'YYYY/MM/DD',
//   );
//   const [open, setOpen] = useState(false);
//   const [date, setDate] = useState('2024/05/13');

//   const handleOnPress = () => {
//     setOpen(!open);
//   };
//   const handleChange = propDate => {
//     setDate(propDate);
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Calendar</Text>
//       <TouchableOpacity onPress={handleOnPress}>
//         <Text>Open</Text>
//       </TouchableOpacity>
//       <Modal animationType="slide" transparent={true} visible={open}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <DatePicker
//               mode="calendar"
//               selected={date}
//               minimumDate={startDate}
//               onDateChanged={handleChange}
//             />
//             <TouchableOpacity onPress={handleOnPress}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// export default Calendar;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     width: '90%',
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     textShadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
// });
