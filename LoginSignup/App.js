import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './source/Homescreen';
import LoginScreen from './source/LoginScreen';
import SignupScreen from './source/SignupScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,}}>
        <Stack.Screen name={"HOME"} component={Homescreen}></Stack.Screen>
        <Stack.Screen name={"LOGIN"} component={LoginScreen}></Stack.Screen>
        <Stack.Screen name={"SIGNUP"} component={SignupScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
