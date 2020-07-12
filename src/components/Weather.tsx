import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import moment from 'moment';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import Icon from 'react-native-easy-icon';

import {Text, Box} from '../components';
import {WeatherData} from '../types';

type WeatherProps = {
  data: WeatherData;
  city: string;
  country: string;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  gradientWrapper: {
    width: 400,
    height: 400,
    position: 'absolute',
    zIndex: 100,
    top: 100,
    left: 200,
  },
  maskWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    transform: [{rotate: '90deg'}],
  },
  maskGradient: {
    flex: 1,
    width: 400,
    height: 400,
    borderRadius: 200,
  },
  gradient: {
    width: 550,
    height: 650,
  },
  currentRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 8,
    paddingBottom: 0,
  },
  currentTemp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  unit: {
    fontSize: 50,
    marginBottom: 4,
  },
  minMax: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Weather = ({data, city, country}: WeatherProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.gradientWrapper}>
      <MaskedView
        style={styles.maskWrapper}
        maskElement={
          <LinearGradient
            colors={['white', 'transparent']}
            style={styles.maskGradient}
          />
        }>
        <AnimatedLinearGradient
          customColors={
            data.main.temp < 20 ? presetColors.sunrise : presetColors.firefox
          }
          speed={2000}
        />
      </MaskedView>
    </View>
    <Box padding="l">
      <Text variant="body">{moment().format('hh:mm a, ddd MMM DD')}</Text>
      <Text variant="bold">
        {city}, {country}
      </Text>
    </Box>

    <View style={styles.content}>
      <View style={styles.currentRow}>
        <View style={styles.currentTemp}>
          <Text variant="hero">{data.main.temp}</Text>
          <Text style={styles.unit}>°C</Text>
        </View>
        <View style={styles.minMax}>
          <Box style={styles.row}>
            <Icon type="antdesign" name="arrowdown" color="#555A5D" size={21} />
            <Text variant="body">{Math.round(data.main.temp_min)} °C</Text>
          </Box>
          <Box style={styles.row} paddingBottom="m">
            <Icon type="antdesign" name="arrowup" color="#555A5D" size={21} />
            <Text variant="body">{Math.round(data.main.temp_max)} °C</Text>
          </Box>
        </View>
      </View>

      <Box paddingVertical="m">
        <Text variant="title">{data.weather[0].main}</Text>
      </Box>

      <Box marginVertical="l">
        <Text variant="subtitle">Additional Info</Text>
        <Box style={styles.row} marginTop="s">
          <Box style={styles.cell} paddingRight="m">
            <Text variant="bold">Wind:</Text>
            <Text variant="body">{data.wind.speed} km/h</Text>
          </Box>
          <Box style={styles.cell} paddingLeft="m">
            <Text variant="bold">Humidity:</Text>
            <Text variant="body">{data.main.humidity} %</Text>
          </Box>
        </Box>

        <Box style={styles.row} marginTop="s">
          <Box style={styles.cell} paddingRight="m">
            <Text variant="bold">Visibility:</Text>
            <Text variant="body">{Math.round(data.visibility / 1000)} km</Text>
          </Box>
          <Box style={styles.cell} paddingLeft="m">
            <Text variant="bold">Pressure:</Text>
            <Text variant="body">{data.main.pressure} hPa</Text>
          </Box>
        </Box>
      </Box>
    </View>
  </SafeAreaView>
);

export default Weather;
