import React, { useState } from 'react';
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
import { Provider as AuthProvider } from './src/context/AuthContext';

const AuthStack = createStackNavigator<AuthStackParamList>();
const TrackStack = createStackNavigator<TrackStackParamList>();
const TrackCreateStack = createStackNavigator<TrackCreateStackParamList>();
const AccountStack = createStackNavigator<AccountStackParamList>();
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
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState('');
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f'
    }
  };

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          {userToken ? (
            <Tabs.Navigator>
              <Tabs.Screen
                name="Account"
                component={AccountStackScreen}
                options={{
                  title: 'Create Account'
                }}
              />
              <Tabs.Screen
                name="TrackCreate"
                component={TrackCreateStackScreen}
              />
              <Tabs.Screen name="Tracks" component={TrackStackScreen} />
            </Tabs.Navigator>
          ) : (
            <AuthStack.Navigator initialRouteName="SignIn">
              <AuthStack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
              />
              <AuthStack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ title: 'Sign Up' }}
              />
            </AuthStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
