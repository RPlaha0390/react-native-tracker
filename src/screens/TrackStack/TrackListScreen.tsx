import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TrackStackParamList } from './types';

type ProfileScreenNavigationProp = StackNavigationProp<
  TrackStackParamList,
  'TrackDetails'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const TrackListScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
      <Button
        title="Track Details"
        onPress={() => navigation.push('TrackDetails')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TrackListScreen;
