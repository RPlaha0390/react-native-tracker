import React, { useContext, useEffect, useState } from 'react';
import AccountScreen from './src/screens/Account/AccountScreen';
import SignInScreen from './src/screens/Auth/SignInScreen';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreate/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackStack/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackStack/TrackListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { AccountStackParamList } from './src/screens/Account/types';
import { AuthStackParamList } from './src/screens/Auth/types';
import { TrackCreateStackParamList } from './src/screens/TrackCreate/types';
import { TrackStackParamList } from './src/screens/TrackStack/types';
import {
  Provider as AuthProvider,
  Context as AuthContext
} from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import SplashScreen from './src/screens/Splash/SplashScreen';

const AuthStack = createStackNavigator<AuthStackParamList>();
const TrackStack = createStackNavigator<TrackStackParamList>();
const TrackCreateStack = createStackNavigator<TrackCreateStackParamList>();
const AccountStack = createStackNavigator<AccountStackParamList>();
const SplashStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TrackStackScreen = () => (
  <TrackStack.Navigator initialRouteName="TrackList">
    <TrackStack.Screen name="TrackList" component={TrackListScreen} />
    <TrackStack.Screen name="TrackDetails" component={TrackDetailsScreen} />
  </TrackStack.Navigator>
);

const TrackCreateStackScreen = () => (
  <TrackCreateStack.Navigator>
    <TrackCreateStack.Screen name="TrackCreate" component={TrackCreateScreen} />
  </TrackCreateStack.Navigator>
);

const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="CreateAccount" component={AccountScreen} />
  </AccountStack.Navigator>
);

const App = () => {
  const { state } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f'
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {isLoading ? (
          <SplashStack.Navigator>
            <SplashStack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          </SplashStack.Navigator>
        ) : state.token ? (
          <Tabs.Navigator initialRouteName="TrackCreate">
            <Tabs.Screen
              name="Account"
              component={AccountStackScreen}
              options={{
                title: 'Account'
              }}
            />
            <Tabs.Screen
              name="TrackCreate"
              component={TrackCreateStackScreen}
              options={{
                title: 'Create Track'
              }}
            />
            <Tabs.Screen name="Tracks" component={TrackStackScreen} />
          </Tabs.Navigator>
        ) : (
          <AuthStack.Navigator initialRouteName="SignUp">
            <AuthStack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

const AppWrapper = () => {
  // Renders the provider, so the context will be accessible from App.
  return (
    <LocationProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LocationProvider>
  );
};

export default AppWrapper;
