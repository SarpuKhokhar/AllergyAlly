import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={styles.overlay}>
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
        <TouchableOpacity>
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
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 19,
    color: '#444',
    marginBottom: 25,
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
  forgotText: {
    marginLeft: 240,
    color: '#0052BB',
    marginBottom: 25,
    fontWeight: '700',
  },
  loginButton: {
    flexDirection:'row',
    backgroundColor: '#0A59D6',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
    top: 20,
  },
loginText: {
  color: 'white',
  fontSize: 16,
  marginRight: 6, 
  },
});

export default LoginScreen;
