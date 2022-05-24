import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { HomeStack } from './HomePage';
import SignUp from './SignUp';
import SignUpStack from './SignUp';
import LogIn from './LogIn';
import ProductScreen from './ProductScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={Store}>
   <NavigationContainer>
     <Stack.Navigator>
    
       <Stack.Screen name='HomePage' component = {HomeStack} 
       options={{
         headerShown:false
       }}
       />
       <Stack.Screen name ='LAnding' component={LandingPage} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
           <Stack.Screen name='SignUp' component={SignUp} options={{
             headerShown:false
           }} />
           <Stack.Screen name='LogIn' component={LogIn} 
           options={{
             headerShown:false
           }}
           />
       </Stack.Group>
     <Stack.Group screenOptions={{ presentation: 'modal' }}>
           <Stack.Screen name='Update' component={ProductScreen} />
     </Stack.Group>
     </Stack.Navigator>
   </NavigationContainer>
   </Provider>
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
