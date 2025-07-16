// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
// } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>

//         {/* HEADER */}
//         <Image
//           source={require('../../assets/images/profile_icon.png')}
//           style={styles.headerImage}
//           resizeMode="contain"
//         />

//         {/* COMPLIANCE OVERVIEW */}
//         <Image
//           source={require('../../assets/images/compliance_icon.png')}
//           style={styles.sectionImage}
//           resizeMode="contain"
//         />

//         {/* APPOINTMENT CARD */}
//         <Image
//           source={require('../../assets/images/appointment_icon.png')}
//           style={styles.sectionImage}
//           resizeMode="contain"
//         />

//         {/* RECENT SHOTS TITLE */}
//         <View style={styles.shotsHeader}>
//           <Text style={styles.sectionTitle}>Recents Shots</Text>
//           <Text style={styles.seeAll}>See All</Text>
//         </View>

//         {/* SHOTS LIST */}
//         {[
//           { title: 'Vial 1B - 0.05 ml', date: '4 March 2025, 10:00 AM' },
//           { title: 'Vial 1A - 0.25 ml', date: '24 May 2025, 10:00 AM' },
//           { title: 'Vial 1A - 0.03 ml', date: '24 April 2025, 10:00 AM' },
//         ].map((item, index) => (
//           <View key={index} style={styles.shotCard}>
//             <View>
//               <Text style={styles.shotTitle}>{item.title}</Text>
//               <Text style={styles.shotDate}>{item.date}</Text>
//             </View>
//             <View style={styles.thumbBadge}>
//               <Text style={styles.thumbIcon}>👍</Text>
//             </View>
//           </View>
//         ))}

//         {/* ALLERGY TIPS */}
//         <Image
//           source={require('../../assets/images/tips_icon.png')}
//           style={styles.sectionImage}
//           resizeMode="contain"
//         />

//         <View style={{ height: 90 }} />
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FC',
//     paddingHorizontal: 16,
//   },
//   headerImage: {
//     width: '110%',
//     height: 130,
//     marginTop: 10,

//   },
//   sectionImage: {

//     marginTop: 16,
//     borderRadius: 10,
//   },
//   shotsHeader: {
//     marginTop: 24,
//     marginBottom: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   seeAll: {
//     color: '#0A59D6',
//     fontWeight: '600',
//   },
//   shotCard: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 14,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//     elevation: 2,
//   },
//   shotTitle: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#333',
//   },
//   shotDate: {
//     fontSize: 13,
//     color: '#777',
//     marginTop: 4,
//   },
//   thumbBadge: {
//     backgroundColor: '#FF9800',
//     padding: 6,
//     borderRadius: 20,
//   },
//   thumbIcon: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  FlatListComponent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { recentShortsList } from '../utils/constant';
export default function HomeScreen() {
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={[styles.shotItem, { borderBottomWidth: (recentShortsList?.length - 1) == index ? 0 : 1 }]}>

        <View>
          <View style={{ flexDirection: 'row', width: "100%" }}>
            <Text style={styles.shotTitle}>{item?.name}</Text>
            <Text style={[styles.shotTitle, { color: "gray" }]}>{item?.ml}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: "100%", alignItems: "center" }}>
            <Image source={require("../../assets/images/calender.png")} style={{ width: 20, height: 20 }} />
            <Text style={[styles.shotDate, { marginLeft: 5 }]}>{item?.date}</Text>
            <Text style={styles.shotDate}> {item.time}</Text>
          </View>
        </View>
        <View>
          <Image source={item.icon} style={{ width: 40, height: 40 }} />
        </View>

      </View>
    )
  }
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>


        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/shield.png')}
            style={{ height: "24%", width: "24%", position: "absolute", top: 45, }} resizeMode='contain'
          />
          <View style={styles.Home}>
            <Text style={styles.Hometext} >Home</Text>
          </View>

          <Text style={styles.title}>Welcome, John Doe</Text>
          <Text style={styles.date}>4 march 2025 . 10:00 AM</Text>
          <Feather name="bell" size={24} color="#fff" style={styles.bell} />
          <Image
            source={require('../../assets/images/Rectangle.png')}
            style={styles.avatar}
          />
        </View>

        {/* Compliance Overview (No SVG) */}
        <View style={styles.card}>
          <View style={styles.fakeProgress}>
            <View style={styles.circle}>
              <Image
                source={require('../../assets/images/Group1.png')}
                style={styles.avat}
              />
            </View>
          </View>
          <View style={{ flex: 1, paddingLeft: 20, }}>
            <Text style={styles.cardTitle}>Compliance Overview</Text>
            <Text style={styles.cardDesc}>
              You have been 75% compliant
            </Text>
             <Text style={styles.cardDesc}>
            with your treatment schedules
            </Text>
             <Text style={styles.cardDes}>
           Your goal is 80% by end of month
            </Text>
          </View>
        </View>

        {/* Next Appointment */}
      <View style={{ justifyContent:'center',alignItems:'center',   }}>
          <Image
          source={require('../../assets/images/appointment_icon.png')}
          style={styles.sectionImage}
        />
      </View>

        {/* Recent Shots */}
        <View style={[styles.shotsContainer]}>
          <View style={{ flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", }}>
            <Text style={[styles.sectionTitle, { color: "black" }]}>Recent Shots</Text>

            <Text style={[styles.sectionTitle, { justifyContent: 'center', alignItems: "center" }]}>See All <Feather name="arrow-right" size={24} color="#ccc" style={styles.bell} /></Text>
          </View>
          <View style={{ borderRadius: 20, width: "95%", alignSelf: "center", backgroundColor: "white", marginTop:7}}>

            <FlatList
              data={recentShortsList}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>

        </View>



        {/* Allergy Tips */}
         <Image
         source={require('../../assets/images/tips_icon.png')}
         style={styles.sectionImag}
        // resizeMode="contain"
      />

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  header: {
    paddingVertical: 5,
    position: 'relative',
    backgroundColor: '#0A59D6',
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  Home: {
    justifyContent: 'center',
    alignItems: 'center',

  },
   sectionImage: {
     borderRadius: 10,
    width:'97%',
    height:'50%',
    alignSelf:'center',
    bottom:55
  },
 
  Hometext: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 25,
    fontWeight: '350',
    top: 35
  },
  avata: {
    alignSelf: 'flex-start',
    height: 35,
    width: 35,
    marginLeft: 30,
    marginTop: 50
  },
  bell: {
    alignSelf: 'flex-end',
    bottom: 45,
    marginRight: 35,
  },
  cardDes:{
    fontSize:20,
  bottom:10,
  fontWeight:'500'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginHorizontal: 23,
    top: 65
  },
  sectionImag:{
      alignSelf:'center',
     marginTop: 10,
     borderRadius: 10,
     height:'27%',
     width:'98%'
  },
  date: {
    color: '#fff',
    marginTop: 2,
    marginHorizontal: 31,
    top: 65
  },
  avatar: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 26,
    height: 50,
    width: 50,
    bottom: 10

  },
  avat: {
    height: 73,
    width: 75
  },
  card: {
    alignSelf:'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    height:'25%',
    width:'97%',
    alignItems: 'center',
    elevation: 3,
  },
  fakeProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    // width: 60,
    height: 60,


    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontWeight: 'bold',
    color: '#333',
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 22,
    marginBottom: 20,
  },
  cardDesc: {
    fontSize: 19,
    color: '#666',
    bottom:15,
    fontWeight:'400'
  },
  appointmentCard: {
    backgroundColor: '#00BFA5',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  appointmentText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  daysLeft: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 8,
  },
  appointmentLocation: {
    color: '#fff',
    fontSize: 15,
  },
  appointmentDate: {
    color: '#DFF',
    fontSize: 13,
    marginTop: 4,
  },
  shotsContainer: {
    marginTop: -120,
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 10,
    marginTop:10,
    color: '#ccc',
  },
  shotItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    paddingVertical: 20,
    width: "95%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderColor: '#ccc',

    // marginBottom: 8,
    // elevation: 2,
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  shotDate: {
    fontSize: 13,
    color: '#666',
  },
  tipCard: {
    backgroundColor: '#3399FF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginTop: 20,
  },
  tipText: {
    color: '#fff',
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
  reportButton: {
    backgroundColor: '#3399FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  reportText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
