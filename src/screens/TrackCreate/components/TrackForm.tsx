import React from 'react';
import { TextInput, Button, withTheme, Theme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Spacer from '../../../components/Spacer/Spacer';

const TrackForm = ({ theme }: { theme: Theme }) => {
  const { colors } = theme;

  return (
    <>
      <TextInput />
      <Spacer marginVertical={5} />
      <Button style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={styles.buttonText}>Start Recording</Text>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 7,
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white'
  }
});
export default withTheme(TrackForm);
