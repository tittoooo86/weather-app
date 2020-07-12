import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, Platform} from 'react-native';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder-reborn';
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  openSettings,
} from 'react-native-permissions';

import {Weather} from '../components';
import {fetchWeather} from '../actions/weatherActions';
import {WeatherData} from '../types';

export interface HomeProps {
  fetchWeather: typeof fetchWeather;
  weather: WeatherData;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Home extends Component<HomeProps> {
  state = {
    city: '',
    country: '',
  };

  async componentDidMount() {
    this.checkLocationPermission();
  }

  checkLocationPermission = async () => {
    const res = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (res === RESULTS.GRANTED) {
      this.fetchLocation();
    } else if (res === RESULTS.DENIED) {
      const requestResult = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (requestResult === RESULTS.GRANTED) {
        this.fetchLocation();
      } else {
        openSettings();
      }
    }
  };

  fetchLocation = () => {
    Geocoder.fallbackToGoogle('AIzaSyA5v8nwpRWNl-j96sqv6GKfHBFpLr5dXk8');
    Geocoder.forceGoogleOnIos(true);
    Geolocation.getCurrentPosition((position) => {
      Geocoder.geocodePosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
        .then((json) => {
          const city = json[0].locality;
          this.setState({
            city,
            country: json[0].country,
          });

          this.props.fetchWeather(city!);
        })
        .catch((error) => console.warn(error));
    });
  };

  render() {
    const {city, country} = this.state;

    return (
      <View style={styles.container}>
        {this.props.weather === null && (
          <ActivityIndicator color={'#000000'} size="large" />
        )}

        {this.props.weather && (
          <Weather data={this.props.weather} city={city} country={country} />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  weather: state.weather.weather,
});

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
