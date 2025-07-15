import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/uper.png')}
        style={styles.appointmentIcon}
        resizeMode="contain"
      />

      <View style={styles.shotsHeader}>
        <Text style={styles.shotsTitle}>Recents Shots</Text>
        <View style={styles.seeAllContainer}>
          <Text style={styles.seeAll}>See All</Text>
          <Icon name="chevron-right" size={20} color="#ccc" />

        </View>
      </View>
        <View  style={styles.Group}>
        <Image
          source={require('../../assets/images/Group.png')}
          style={styles.Groupimage}/>
      </View>

      <View style={styles.bottomimage}>
        <Image
          source={require('../../assets/images/tips_icon.png')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  appointmentIcon: {
    width: width * 2.2,
    height: undefined,
    aspectRatio: 2,
    right: 260,
  
  },
  shotsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 1,
    marginBottom: 17,
  },
  shotsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 14,
    color: '#000',
    marginRight: 4,
  },
  bottomimage: {
    bottom:50,
    alignItems: 'center',
    
  },
  Group:{
    bottom:25
  },
  Groupimage:{
     width:420,
     right:5
  }

});

export default HomeScreen;
