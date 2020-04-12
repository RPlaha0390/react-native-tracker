import React, { useState, useContext, ContextType } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Title, TextInput, Button, Theme, withTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import Spacer from '../../components/Spacer/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import { AuthContextProps } from '../../context/createDataContext';

type ProfileScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

interface Props {
  navigation: ProfileScreenNavigationProp;
  theme: Theme;
}

const SignUpScreen = ({ navigation, theme }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, actions } = useContext<AuthContextProps>(AuthContext);
  const { colors } = theme;

  console.log(state);

  return (
    <View style={styles.container}>
      <Spacer>
        <Title>Sign Up </Title>
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
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => actions.signUpAction({ email, password })}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
      </Spacer>
      <Spacer>
        <Button onPress={() => navigation.push('SignIn')}>
          Already have an account? Sign In
        </Button>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  button: {
    padding: 7,
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white'
  },
  errorMessage: {
    color: 'red'
  }
});

export default withTheme(SignUpScreen);
