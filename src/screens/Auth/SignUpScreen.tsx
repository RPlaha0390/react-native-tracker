import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Theme, withTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import Spacer from '../../components/Spacer/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import { AuthContextProps } from '../../context/createDataContext';
import TextLink from '../../components/TextLink/TextLink';
import AuthForm from './components/AuthForm';

type ProfileScreenNavigationProp = StackNavigationProp<AuthStackParamList>;

interface Props {
  navigation: ProfileScreenNavigationProp;
  theme: Theme;
}

const SignUpScreen = ({ navigation, theme }: Props) => {
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
        headerText="Sign up to Tracker"
        buttonText="Sign up"
        errorMessage={state.errorMessage}
        onSubmit={actions.signUp}
      />
      <Spacer>
        <TextLink
          onPress={() => navigation.push('SignIn')}
          style={{ color: colors.primary }}>
          Already have an account? Sign In
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
  }
});

export default withTheme(SignUpScreen);
