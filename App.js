import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositonAsync();
      console.log(location);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}