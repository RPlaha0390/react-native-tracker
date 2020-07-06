import React, { useContext } from 'react';
import { TextInput, Button, withTheme, Theme, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Spacer from '../../../components/Spacer/Spacer';
import { Context as LocationContext } from '../../../context/LocationContext';

const TrackForm = ({ theme }: { theme: Theme }) => {
  const { colors } = theme;
  const {
    state: { name, recording, locations },
    actions
  } = useContext(LocationContext);

  return (
    <>
      <TextInput
        value={name}
        onChangeText={actions.changeName}
        placeholder="Enter name"
      />
      <Spacer marginVertical={5} />
      {recording ? (
        <Button
          onPress={actions.stopRecording}
          style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>Stop</Text>
        </Button>
      ) : (
        <Button
          onPress={actions.startRecording}
          style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>Start Recording</Text>
        </Button>
      )}
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
