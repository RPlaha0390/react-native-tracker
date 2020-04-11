import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  TextInput,
  Button,
  Title,
  Theme,
  withTheme,
  Text
} from 'react-native-paper';
import Spacer from '../../components/Spacer/Spacer';
import { AuthStackParamList } from './types';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;
  theme: Theme;
}

const SignInScreen = ({ navigation, theme }: Props) => {
  const { colors } = theme;

  return (
    <View style={styles.container}>
      <Spacer>
        <Title>Sign In </Title>
      </Spacer>
      <Spacer>
        <TextInput label="Email" />
      </Spacer>
      <Spacer>
        <TextInput label="Password" />
      </Spacer>
      <Spacer>
        <Button style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Button>
      </Spacer>
      <Spacer>
        <Button onPress={() => navigation.push('SignUp')} style={styles.button}>
          <Text style={{ color: colors.primary }}>
            Don't have an account? Sign up
          </Text>
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
  }
});

export default withTheme(SignInScreen);
