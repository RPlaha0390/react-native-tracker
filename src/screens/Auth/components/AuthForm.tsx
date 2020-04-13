import React, { useState } from 'react';
import {
  TextInput,
  Button,
  Title,
  Theme,
  Text,
  withTheme
} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Spacer from '../../../components/Spacer/Spacer';

interface Props {
  headerText: string;
  errorMessage: string;
  onSubmit: ({ email, password }: { email: string; password: string }) => {};
  buttonText: string;
  theme: Theme;
}

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  buttonText,
  theme
}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = theme;

  return (
    <>
      <Spacer>
        <Title>{headerText}</Title>
      </Spacer>
      <Spacer>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer marginVertical={0}>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => onSubmit({ email, password })}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red'
  },
  button: {
    padding: 7,
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white'
  }
});

export default withTheme(AuthForm);
