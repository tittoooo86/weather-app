import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Weather} from '../components';

export interface HomeProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
});

class Home extends Component<HomeProps> {
  render() {
    return (
      <View style={styles.container}>
        <Weather />
      </View>
    );
  }
}

export default Home;
