import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../../components/Spacer/Spacer';
import Map from './containers/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Headline>Create Track</Headline>
      </Spacer>
      <Spacer>
        <Map />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
