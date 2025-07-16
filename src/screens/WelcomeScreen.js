import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/nurse.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subTitle}>AllergyAlly</Text>
        </View>

        <LinearGradient
          colors={['rgba(74, 175, 247, 0)', '#0475A0CC', '#066AB6CC']}
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
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: height * 0.08,
    marginLeft: width * 0.05,
  },
  title: {
    fontSize: width * 0.12,
    fontWeight: '800',
    color: '#000',
  },
  subTitle: {
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#000',
    bottom:10
  },
  gradientBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.22,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.03,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoText: {
    fontSize: width * 0.05,
    color: '#fff',
  letterSpacing:2
  },
  infoTextBold: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#fff',
      // lineHeight:10,
    letterSpacing:0.5
  },
  nextBtn: {
    backgroundColor: '#FFF',
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: (width * 0.16) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});

export default WelcomeScreen;
