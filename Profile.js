import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
export default function Profile(){
    return(
        <View>
            <Text>Profile</Text>
        </View>
    )
}
