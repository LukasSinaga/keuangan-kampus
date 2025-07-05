import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AnggaranScreen from './screens/AnggaranScreen';
import PengeluaranScreen from './screens/PengeluaranScreen';
import PemasukanScreen from './screens/PemasukanScreen';
import AsetScreen from './screens/AsetScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Anggaran" component={AnggaranScreen} />
        <Stack.Screen name="Pengeluaran" component={PengeluaranScreen} />
        <Stack.Screen name="Pemasukan" component={PemasukanScreen} />
        <Stack.Screen name="Aset" component={AsetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
