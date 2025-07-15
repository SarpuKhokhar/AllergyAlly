import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/nurse.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subTitle}>AllergyAlly</Text>
<LinearGradient
  colors={['rgba(74, 175, 247, 0)', '#0475A0CC', '#066AB6CC']} // top color with 00 alpha for full transparency
  style={styles.gradientBox}
>
  <View style={styles.bottomContent}>
    <View>
      <Text style={styles.infoText}>Manage your allergies from</Text>
      <Text style={styles.infoTextBold}>Anywhere, at Anytime</Text>
    </View>

    <TouchableOpacity
      onPress={() => navigation.navigate('Signup')}
      style={styles.nextBtn}
    >
      <MaterialCommunityIcons name="chevron-double-right" size={28} color="#158eebcc" />
    </TouchableOpacity>
  </View>
</LinearGradient>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: '#000',
    marginTop: 60,
    marginLeft: 20,
    
  },
  subTitle: {
    position:'absolute',
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginLeft: 20,
    top:115
  },
  gradientBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 170,
    padding: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoText: {
    fontSize: 23,
    color: '#fff'
  },
  infoTextBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  nextBtn: {
    backgroundColor: '#FFF',
    width: 65,
    height: 65,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    right:10
  }
});

export default WelcomeScreen;
