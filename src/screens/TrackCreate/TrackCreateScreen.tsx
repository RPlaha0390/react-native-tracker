import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../../components/Spacer/Spacer';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Headline>TrackCreateScreen</Headline>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
