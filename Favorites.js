import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setSignUp } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';
const Tab = createBottomTabNavigator();
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default function Favorites(){
    const dispatch = useDispatch()
      const nav = useNavigation()
    const {user,modal} = useSelector(state => state.userReducer)
    return(
        <View style={{flex:1, justifyContent:'center', backgroundColor:'white', alignItems:'center'}}>
            <Text style={{marginBottom:10, fontSize:20, fontWeight:'600'}}>NOTHING SAVED...</Text>
            <Text style={{width:'60%',lineHeight:20}} numberOfLines={3} >...Join to start saving,or sign in to view your previous liked items ! Online shopping made way easier.</Text>
            <TouchableOpacity style={{width:'60%', borderWidth:1, marginTop:15,backgroundColor:'black'}}
            onPress={() => {
                nav.navigate('LogIn')
            }}
            >
                <Text style={{paddingVertical:15, fontSize:18, fontWeight:'600', alignSelf:'center' , color:'white'}}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{width:'60%', borderWidth:1, marginTop:15,}}
                onPress={() => {
                   nav.navigate('SignUp')
                }}
                >
                <Text style={{paddingVertical:15, fontSize:18, fontWeight:'600', alignSelf:'center', }}>JOIN US</Text>
                </TouchableOpacity>
        </View>
    )
}
