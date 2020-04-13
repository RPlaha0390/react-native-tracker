import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, withTheme, Theme, Headline } from 'react-native-paper';
import { Context as AuthContext } from '../../context/AuthContext';
import Spacer from '../../components/Spacer/Spacer';
import SafeAreaView from 'react-native-safe-area-view';

const AccountScreen = ({ theme }: { theme: Theme }) => {
  const { state, actions } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Headline>AccountScreen</Headline>
      </Spacer>
      <Spacer>
        <Button
          onPress={actions.signOut}
          style={{ backgroundColor: theme.colors.error }}>
          <Text style={{ color: 'white' }}>Log Out</Text>
        </Button>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withTheme(AccountScreen);
