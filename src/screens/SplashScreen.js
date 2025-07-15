import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Splash.png')} style={styles.image} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',  },
  image: { width: '110%', height: '110%', marginBottom: 20, resizeMode: 'contain' },
});

export default SplashScreen;
