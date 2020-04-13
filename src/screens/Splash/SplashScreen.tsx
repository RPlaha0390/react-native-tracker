import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';

const SplashScreen = () => {
  const { actions } = useContext(AuthContext);

  useEffect(() => {
    actions.restoreToken();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={50} />
    </View>
  );
};

export default SplashScreen;
