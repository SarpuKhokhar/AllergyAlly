import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker from 'react-native-country-picker-modal';

const SignupScreen = ({ navigation }) => {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [countryCode, setCountryCode] = useState('IN');

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/image.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../../assets/images/shield.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.subtitle}>Please enter your details</Text>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Icon name="user" size={20} color="#FEAB5B" />
            </View>
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#888"
              style={styles.input}
              onChangeText={(val) => handleChange('firstName', val)}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Icon name="user" size={20} color="#FEAB5B" />
            </View>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#888"
              style={styles.input}
              onChangeText={(val) => handleChange('lastName', val)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="mail" size={20} color="#FEAB5B" />
          </View>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={(val) => handleChange('email', val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withFilter
            withCallingCode
            onSelect={(country) => {
              setCountryCode(country.cca2);
              handleChange('countryCode', country.callingCode[0]);
            }}
            containerButtonStyle={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#888"
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={(val) => handleChange('phone', val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="briefcase" size={20} color="#FEAB5B" />
          </View>
          <TextInput
            placeholder="Practice Code"
            placeholderTextColor="#888"
            style={styles.input}
            onChangeText={(val) => handleChange('practiceCode', val)}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Icon name="activity" size={20} color="#FEAB5B" />
            </View>
            <TextInput
              placeholder="Height"
              placeholderTextColor="#888"
              style={styles.input}
              onChangeText={(val) => handleChange('height', val)}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Icon name="activity" size={20} color="#FEAB5B" />
            </View>
            <TextInput
              placeholder="Weight"
              placeholderTextColor="#888"
              style={styles.input}
              onChangeText={(val) => handleChange('weight', val)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="calendar" size={20} color="#FEAB5B" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>DOB</Text>
            <TextInput
              placeholder="DD-MM-YYYY"
              placeholderTextColor="#888"
              value={form.dob}
              onChangeText={(val) => handleChange('dob', val)}
              style={styles.inputWithLabel}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="card-giftcard" size={20} color="#0AA97E" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="lock" size={20} color="#FEAB5B" />
          </View>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry={!showPassword}
            onChangeText={(val) => handleChange('password', val)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? 'visibility' : 'visibility-off'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By Creating Passcode You Agree With Our{'\n'}
          <Text style={styles.link}>Terms & Conditions</Text> And{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
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
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 19,
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    width: '100%',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    marginRight: 8,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingVertical: 19,
    fontSize: 14,
    color: '#333',
  },
  inputWithLabel: {
    fontSize: 14,
    paddingVertical: 6,
    color: '#000',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#0A59D6',
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 30,
    width: '100%',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  terms: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 18,
  },
  link: {
    color: '#0252CF',
    fontWeight: '900',
  },
});

export default SignupScreen;
