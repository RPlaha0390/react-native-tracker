import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Theme, withTheme } from 'react-native-paper';
import Spacer from '../../components/Spacer/Spacer';
import { AuthStackParamList } from './types';
import TextLink from '../../components/TextLink/TextLink';
import { AuthContextProps } from '../../context/createDataContext';
import { Context as AuthContext } from '../../context/AuthContext';
import AuthForm from './components/AuthForm';

interface Props {
  navigation: StackNavigationProp<AuthStackParamList>;
  theme: Theme;
}

const SignInScreen = ({ navigation, theme }: Props) => {
  const { state, actions } = useContext<AuthContextProps>(AuthContext);
  const { colors } = theme;

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () =>
      actions.clearError()
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Tracker"
        buttonText="Sign in"
        errorMessage={state.errorMessage}
        onSubmit={actions.signIn}
      />
      <Spacer>
        <TextLink
          onPress={() => navigation.push('SignUp')}
          style={{ color: colors.primary }}>
          Don't have an account? Sign up
        </TextLink>
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
