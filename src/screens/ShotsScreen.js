import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ShotsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const shotsData = [
    { id: 1, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirm', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 2, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirmed', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 3, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirm', location: 'Uptown Allergy Center', bottle: 'M', date: '4 march 2025, 10:00 AM' },
    { id: 4, vial: '1B.0.05ml', dosage: '0.05 ml', frequency: 'Weekly', status: 'Confirmed', location: 'Uptown Allergy Center', bottle: 'M' },
  ];

  const [reaction, setReaction] = useState(null);

  const handleReaction = (type) => {
    setReaction(type);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#266cadff'} />
      <View style={styles.header}>
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
        <Text style={styles.tabActive}>Upcoming</Text>
        <Text style={styles.tab}>Missed</Text>
        <Text style={styles.tab}>Completed</Text>
      </View>
      <ScrollView>
        {shotsData.map((shot) => (
          <View key={shot.id} style={styles.shotCard}>
            <View style={styles.shotInfo}>
              <Text>Vial {shot.vial} </Text>
              <Text style={[styles.status,{padding:5}, { color: shot.status === 'Confirmed' ? 'black' : 'black', backgroundColor: shot.status === 'Confirm' ? '#FFA500' : '#07B601' }]}>{shot.status}</Text>
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
              {(shot.id === 1 || shot.id === 2 || shot.id === 3) && (
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
          <Image style={styles.doctorImage} source={require('../../assets/images/image9.png')} />
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F7FD' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, backgroundColor: '#0A59D6', height: '10%' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', left: 150, top: 20 },
  profile: { width: 50, height: 50, borderRadius: 20, top: 10, right: 20 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, left: 40 },
  searchIcon: { width: 20, height: 20, position: 'absolute', left: 20 },
  search: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 30, width: '70%', backgroundColor: '#fff', fontSize: 15, paddingLeft: 50 ,},
  rightIcon: { width: 40, height: 40, marginRight: 20 },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  tabActive: { fontWeight: 'bold', color: '#007AFF' },
  tab: { color: '#666' },
  shotCard: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 10 },
  shotInfo: { flexDirection: 'row', marginBottom: 3, },
  status: { fontSize: 14, padding: 1, borderRadius: 3, color: '#fff' },
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
  reactionCard: { backgroundColor: '#fff', padding: 10, borderRadius: 10, flexDirection: 'column', alignItems: 'center' },
  doctorImage: { width: 70, height: 70, borderRadius: 9, marginBottom: 10 ,right:120,top:30},
  reactionText: { flex: 1, textAlign: 'center', marginBottom: 10 ,bottom:47,fontSize:16,left:20},
  reactionButtons: { flexDirection: 'row', justifyContent: 'center' ,bottom:50,left:40,height:35},
  buttonNo: { backgroundColor: '#F10A0A', padding: 5, borderRadius: 5, marginRight: 5,width:50 },
  buttonMild: { backgroundColor: '#FEAB5B', padding: 5, borderRadius: 5, marginRight: 5 ,width:70},
  buttonSevere: { backgroundColor: '#0066FC', padding: 5, borderRadius: 5,width:100 },
  buttonText: { color: '#fff', textAlign: 'center' },
});

export default ShotsScreen;