import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.overlay} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/shield.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please enter your Email & Password</Text>

        {/* Email Field */}
        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="mail" size={20} color="#F4C430" />
          </View>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="lock" size={20} color="#F4C430" />
          </View>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#999"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace('MainTabs')}
        >
          <Text style={styles.loginText}>Patient Login</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </ScrollView>
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  logo: {
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: width * 0.045,
    color: '#444',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    marginRight: 8,
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  input: {
    flex: 1,
    paddingVertical: 20,
    fontSize: 14,
    color: '#333',
  },
  eyeIcon: {
    paddingHorizontal: 5,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    color: '#0052BB',
    fontWeight: '700',
  },
  loginButton: {
    flexDirection: 'row',
    backgroundColor: '#0A59D6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    marginRight: 6,
  },
});

export default LoginScreen;
