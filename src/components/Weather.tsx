import React from 'react';
import {View, StyleSheet, SafeAreaView, Image} from 'react-native';
import moment from 'moment';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import {Text, Box} from '../components';

type WeatherProps = {};

const styles = StyleSheet.create({
  container: {
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
  rightPadding: {
    paddingRight: 8,
  },
  leftPadding: {
    paddingLeft: 8,
  },
});

const Weather = () => (
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
          customColors={presetColors.sunrise}
          speed={2000}
        />
      </MaskedView>
    </View>
    <Box padding="l">
      <Text variant="body">{moment().format('hh:mm a, ddd MMM DD')}</Text>
      <Text variant="bold">Budapest, Hungay</Text>
    </Box>

    <View style={styles.content}>
      <Image
        style={{width: 60, height: 60}}
        source={{
          uri: `http://openweathermap.org/img/wn/10n@2x.png`,
        }}
      />
      <View style={styles.currentRow}>
        <View style={styles.currentTemp}>
          <Text variant="hero">27</Text>
          <Text style={{fontSize: 50, marginBottom: 4}}>°C</Text>
        </View>
        <View style={styles.minMax}>
          <Text variant="body">15 °C</Text>
          <Text variant="body">38 °C</Text>
        </View>
      </View>

      <Box paddingVertical="m">
        <Text variant="title">Cloudy</Text>
      </Box>

      <Box marginVertical="l">
        <Text variant="subtitle">Additional Info</Text>
        <Box style={styles.row} marginTop="s">
          <View style={{...styles.cell, ...styles.rightPadding}}>
            <Text variant="bold">Wind:</Text>
            <Text variant="body">23.3 km/h</Text>
          </View>
          <View style={{...styles.cell, ...styles.leftPadding}}>
            <Text variant="bold">Humidity:</Text>
            <Text variant="body">68 %</Text>
          </View>
        </Box>

        <Box style={styles.row} marginTop="s">
          <View style={{...styles.cell, ...styles.rightPadding}}>
            <Text variant="bold">Visibility:</Text>
            <Text variant="body">16 km</Text>
          </View>
          <View style={{...styles.cell, ...styles.leftPadding}}>
            <Text variant="bold">Pressure:</Text>
            <Text variant="body">1044 hPa</Text>
          </View>
        </Box>
      </Box>
    </View>
  </SafeAreaView>
);

export default Weather;
