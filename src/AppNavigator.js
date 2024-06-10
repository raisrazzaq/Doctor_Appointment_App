import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import BookAppointment from './screens/bookAppointment';
import SuccessScreen from './screens/successScreen/SuccessScreen';
import Pending from './screens/pending/Pending';
import Completed from './screens/completed/Completed';
import CallAmb from './screens/ambulace/CallAmb';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookAppointment"
          component={BookAppointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pending"
          component={Pending}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Completed"
          component={Completed}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CallAmb"
          component={CallAmb}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
