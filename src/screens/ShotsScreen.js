import React, { useState } from 'react';
import { ScrollView, StatusBar, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const ShotsScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const statusBarHeight = getStatusBarHeight();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Upcoming');

  const shotsData = [
    { id: 1, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirm', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 2, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirmed', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 3, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirm', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 4, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Missed', location: 'Uptown Allergy Center', bottle: 'M' },
    { id: 5, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Completed', location: 'Uptown Allergy Center', bottle: 'M' },
    { id: 6, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirm', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 7, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Missed', location: 'Uptown Allergy Center', bottle: 'M' },
    { id: 8, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Completed', location: 'Uptown Allergy Center', bottle: 'M' },
  ];

  const filteredShots = shotsData.filter(shot => {
    if (selectedTab === 'Upcoming') return shot.status === 'Confirm' || shot.status === 'Confirmed';
    if (selectedTab === 'Missed') return shot.status === 'Missed';
    if (selectedTab === 'Completed') return shot.status === 'Completed';
    return true;
  });

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={'#3547BC'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#fff" style={styles.bell} />
        </TouchableOpacity>
        <Text style={styles.title}>Shots</Text>
        <Image style={styles.profile} source={require('../../assets/images/Rectangle.png')} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={'#666'}
        />
        <Image source={require('../../assets/images/searchoutline.png')} style={styles.searchIcon} />
        <Image source={require('../../assets/images/Group38097.png')} style={styles.rightIcon} />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedTab('Upcoming')}>
          <Text style={[styles.tab, selectedTab === 'Upcoming' && styles.tabActive]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Missed')}>
          <Text style={[styles.tab, selectedTab === 'Missed' && styles.tabActive]}>Missed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Completed')}>
          <Text style={[styles.tab, selectedTab === 'Completed' && styles.tabActive]}>Completed</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {filteredShots.map((shot) => (
          <View key={shot.id} style={styles.shotCard}>
            <View style={styles.shotInfo}>
              <View style={{ flexDirection: "row", width: "40%" }}>
                <Text>Vial <Text style={{ marginHorizontal: 5 }}>{" " + shot.vial + "  "} </Text></Text>

                <Text style={[styles.status, { padding: 5 }, { backgroundColor: shot.status === 'Confirm' ? '#FFA500' : shot.status === 'Confirmed' ? '#07B601' : shot.status === 'Missed' ? '#FF0000' : '#0000FF', color: '#fff' }]}>{shot.status}</Text>

              </View>

            </View>

            <View style={styles.details}>
              <View style={styles.detailRow}>
                <Image source={require('../../assets/images/Groupclonder.png')} style={styles.detailIcon} />
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Frequency</Text>
                  <Text style={styles.subText}>{shot.frequency}</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <Image source={require('../../assets/images/Groupdos.png')} style={styles.detailIcon} />
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Dosage</Text>
                  <Text style={styles.subText}>{shot.dosage}</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <Image source={require('../../assets/images/Groupbottle.png')} style={styles.detailIcon} />
                <View style={styles.textContainer}>
                  <Text style={styles.label}>Bottle</Text>
                  <Text style={styles.subText}>{shot.bottle}</Text>
                </View>
              </View>
            </View>

            <View style={styles.locationDate}>
              <View style={styles.locationContainer}>
                <Image source={require('../../assets/images/loction.png')} style={styles.locationIcon} />
                <Text style={styles.location}>{shot.location}</Text>
              </View>
              {shot.date && (
                <View style={styles.dateContainer}>
                  <Image source={require('../../assets/images/Groupclonder.png')} style={styles.dateIcon} />
                  <Text style={styles.date}>{shot.date}</Text>
                </View>
              )}
            </View>
            <Image source={require('../../assets/images/bottlesirg.png')} style={styles.bottleIcon} />
          </View>
        ))}
              <View style={styles.reactionCard}>
           {/* <Image style={styles.doctorImage} source={require('../../assets/images/image9.png')} /> */}
           <View>
             <Image source={require('../../assets/images/image9.png')} />
           </View>
               <View>
           <Text style={styles.reactionText}>Did you have a reactions?</Text>

        <View style={styles.reactionButtons}>
             <TouchableOpacity style={styles.buttonNo} onPress={() => handleReaction('No')}>
               <Text style={styles.buttonText}>No</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonMild} onPress={() => handleReaction('Mild')}>
               <Text style={styles.buttonText}>Mild</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.buttonSevere} onPress={() => handleReaction('Severe')}>
               <Text style={styles.buttonText}>Severe</Text>
             </TouchableOpacity>
             </View>
           </View>
     </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    doctorImage: { width: 70, height: 70, borderRadius: 9, marginBottom: 10 ,right:120,top:30},
  reactionText: { textAlign: 'center'},
  reactionButtons: { flexDirection: 'row', justifyContent: 'center' ,left:40,height:35},
  buttonNo: { backgroundColor: '#F10A0A',justifyContent:"center", borderRadius: 5, marginRight: 5,width:50 },
  buttonMild: { backgroundColor: '#FEAB5B', justifyContent:"center", borderRadius: 5, marginRight: 5 ,width:70},
  buttonSevere: { backgroundColor: '#0066FC',justifyContent:"center", borderRadius: 5,width:100 },
  buttonText: { color: '#fff', textAlign: 'center' },

   reactionCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center',justifyContent:"center",width:"91%",alignSelf:"center" },
  container: { flex: 1, backgroundColor: '#F2F7FD' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, backgroundColor: '#0A59D6', height: 60, alignItems: 'center', paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  profile: { width: 40, height: 40, borderRadius: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, paddingHorizontal: 20 },
  searchIcon: { width: 20, height: 20, position: 'absolute', left: 35 },
  search: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 30, flex: 1, backgroundColor: '#fff', fontSize: 15, paddingLeft: 40, marginRight: 10 },
  rightIcon: { width: 40, height: 40 },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  tab: { color: '#666', fontSize: 16 },
  tabActive: { color: '#007AFF', fontWeight: 'bold', fontSize: 16, borderBottomWidth: 2, borderBottomColor: '#007AFF', paddingBottom: 5 },
  shotCard: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 10, marginHorizontal: 20 },
  shotInfo: { flexDirection: 'row', marginBottom: 3 },
  status: { fontSize: 14, padding: 1, borderRadius: 3, color: '#fff', width: "50%" },
  details: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, top: 10 },
  detailRow: { alignItems: 'center', flexDirection: 'row' },
  detailIcon: { width: 20, height: 20, marginRight: 5, bottom: 10 },
  textContainer: { flexDirection: 'column', alignItems: 'flex-start' },
  label: { color: '#666' },
  subText: { marginTop: 2 },
  locationDate: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, top: 10 },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationIcon: { width: 9, height: 9, marginRight: 5 },
  location: { fontSize: 12, color: '#007AFF' },
  dateContainer: { flexDirection: 'row', alignItems: 'center', top: 1 },
  dateIcon: { width: 15, height: 15, marginRight: 5 },
  date: { fontSize: 12, color: '#666' },
  bottleIcon: { width: 30, height: 30, position: 'absolute', top: 10, right: 10 },
});

export default ShotsScreen;
