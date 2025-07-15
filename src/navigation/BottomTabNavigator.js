import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ShotsScreen from '../screens/ShotsScreen';
import ReactionsScreen from '../screens/ReactionsScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');
const TAB_WIDTH = (width - 130) / 3; 

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const animLeft = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animLeft, {
      toValue: state.index * TAB_WIDTH + 20,
      useNativeDriver: false,
    }).start();
  }, [state.index]);

  const handlePress = (routeName) => {
    const index = state.routes.findIndex(r => r.name === routeName);
    if (state.index !== index) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={styles.wrapper}>
      {/* Moon dip */}
      <Animated.View style={[styles.moon, { left: animLeft }]}>
        <View style={styles.dot} />
      </Animated.View>

      <View style={styles.tabRow}>
        <View style={styles.leftTabs}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel ?? route.name;
            const isFocused = state.index === index;

            let iconName;
            let IconComponent;
            if (route.name === 'Home') {
              iconName = isFocused ? 'home' : 'home-outline';
              IconComponent = Ionicons;
            } else if (route.name === 'Shots') {
              iconName = 'needle';
              IconComponent = MaterialCommunityIcons;
            } else if (route.name === 'Reactions') {
              iconName = 'emoticon-sad-outline';
              IconComponent = MaterialCommunityIcons;
            }

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(route.name)}
                style={styles.tabItem}
              >
                <IconComponent name={iconName} size={22} color={isFocused ? '#0ACF83' : '#6B7280'} />
                <Text style={[styles.label, isFocused ? styles.activeLabel : styles.inactiveLabel]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={styles.reportButton}>
          <Ionicons name="add" size={16} color="#fff" />
          <Text style={styles.reportText}>Report A Reaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shots" component={ShotsScreen} />
      <Tab.Screen name="Reactions" component={ReactionsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    height: 75,
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    right:15,
    top:5
  },
  leftTabs: {
    flexDirection: 'row',
    width: width - 160,
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: TAB_WIDTH,
  },
  label: {
    fontSize: 11,
    marginTop: 2,
  },
  activeLabel: {
    color: '#0ACF83',
  },
  inactiveLabel: {
    color: '#6B7280',
  },
  moon: {
    position: 'absolute',
    top: 0,
    width: 50,
    height: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: '#ccc',
    borderWidth: 1,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#0ACF83',
    borderRadius: 4,
    marginTop: 3,
  },
  reportButton: {
    flexDirection: 'row',
    backgroundColor: '#0A59D6',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    left:20,
    bottom:8

  },
  reportText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 6,
  },
});

export default BottomTabNavigator;
