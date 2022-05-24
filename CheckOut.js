import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,useRef} from 'react'
import { StyleSheet, Text, View,SafeAreaView,Dimensions,Image,TouchableOpacity,ScrollView,FlatList, Alert, Modal, ImageStore } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import Favorites from './Favorites';
import Profile from './Profile';
import { SliderBox } from "react-native-image-slider-box";
import Slideshow from 'react-native-slideshow-improved';
import TimedSlideshow from 'react-native-timed-slideshow';
import InstaStory from 'react-native-insta-story';
import { LinearGradient } from 'expo-linear-gradient';
import { DiscoverStack } from './Discover';
import { useSelector, useDispatch } from 'react-redux';
import { setClicked, setSearchClicked,setFilter,setTab,setArrow,setImages,setUser,setNumberOfCartItems,setAuthenticaed } from './redux/actions';
import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ReadMore from '@fawazahmed/react-native-read-more';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'
import firebase, { createUserDocument,createCart,getCartItems } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import {doc, setDoc, addDoc, getFirestore, collection} from 'firebase/firestore'
import CounterInput from "react-native-counter-input";
import ModalDropdown from 'react-native-modal-dropdown';
import Counter from "react-native-counters";
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
export default function CheckOut(){
    const {click,cat,c,filter,tab,product,arrow,images,user,cart,yes} = useSelector(state => state.userReducer)
    const nav = useNavigation()
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const lottieRef = useRef()
    const [cartItems,setCartItems] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
    const [number,setNumber] = useState({})
    const [selectedIndex,setSelectedIndex] = useState()
    useEffect(() => {
        setLoading(true)
        lottieRef.current?.play()
        setTimeout(async() => {
            if(user){
                  const data = await getCartItems(user)
            console.log(data)
            setCartItems(data.data().temp)
            dispatch(setNumberOfCartItems(cartItems.length))
            
      

   setTrial(cartItems.map((i,index) => (
    {
        id: index, count: 1
    }
)))    
 setTotalPrice(getPrice())

setLoading(false)
dispatch(setAuthenticaed(false))
            } else{
                setLoading(false)
                setCartItems([])
            }
          
        },2000)
        
    },[yes,trial,user])
    console.log(user)
 let final = cartItems.map((item,index) => (
        {
            image:item.images[0], name:item.product, price: item.price, size:item.size, color:item.color, serial:1
        }
    ))
const [newPrices,setNewPrices] = useState([])
  const [addedPrice, setAddedPrice] = useState(0)
 const[trial,setTrial] = useState()

   const getPrice = () => {

            return final.reduce((sum,item,index) => (sum + (item.price)),0)
      
     
          
          
       
      
   }



const setPrice = (index,num) => {

     let updatedList = trial.map((i,number) => {
         if(index === i.id){
             return {...i, count: i.count + 1}
             
         } else {
             return i
         }
     })
     
dispatch(setNumberOfCartItems(cart + 1))
     setTrial(updatedList)

setAddedPrice(prev => prev + final[index].price)
}

const [ n,setN] =useState(1)
const decreasePrice = (index,num) => {
    let updatedList = trial.map((i,number) => {
        if(index === i.id){
            return {...i, count: i.count - 1}
        } else {
            return i
        }
    })
   dispatch(setNumberOfCartItems(cart - 1))
    setTrial(updatedList)
    setAddedPrice(prev => prev - final[index].price)
}

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            {loading && (
   <View style={{justifyContent:'center', alignItems:'center',height:HEIGHT}}>
   <LottieView source={require('./assets/197-glow-loading.json')}  ref={lottieRef}     style={{
width:'100%', zIndex:10,alignSelf:'center', transform:[{translateY:-30}]
       
     }}  />
  
</View>  
            )}
     {cart > 0 && (
         <ScrollView style={{marginHorizontal:20}}>
                <View style={{paddingBottom:15, borderBottomWidth:1, borderBottomColor:'lightgrey', }}>
                      <Text style={{marginTop:10, fontSize:28, fontWeight:'700'}}>Check Out</Text>
               <Text  style={{marginTop:5, fontweight:'300', fontSize:17}}>{cart} items</Text>
                </View>
                <View>
                    {user && final.map((i,index) => 
                        <View style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
                            <Image source ={{uri:i.image}} style={{width:WIDTH*0.3, height:HEIGHT*0.25, borderWidth:1, borderColor:'transparent',borderRadius:10}} />
                          <View style={{marginLeft:10}}>
                            <Text style={{width:WIDTH*0.4, fontWeight:'600', fontSize:18}}>{i.name}</Text>  

                           
                                 <Text style={{fontSize:16, marginTop:5, fontWeight:'500'}}>$ {  trial.map(item => item.id === index &&  <Text>{item.count * i.price}</Text>) }</Text>
                       
                            <Text style={{marginTop:10, fontWeight:'300', fontSize:15}}>Size: {i.size}</Text>
                           <View style={{flexDirection:'row'}}>
                             <Text style={{marginTop:5, fontWeight:'300', fontSize:15}}>Color:</Text>
                            <Ionicons name='ellipse' color={i.color} size={28} style={{marginLeft:5}}/>
                            <Feather name='edit' size={28} onPress={() => nav.navigate('Update')} />
                             </View>
                             <Counter start={1} buttonStyle={{
     borderColor: '#333',
     borderWidth: 2,
     borderRadius: 25
   }}
   buttonTextStyle={{
     color: '#333',
   }}
   countTextStyle={{
     color: '#333',
   }}
   min={1}
   onChange={(num,type) => {
    {type === '+' ? (
        
     setPrice(index,num)
    ) : (
        decreasePrice(index,num)
    )}
   
   }}
   />
                              </View>
                            
                            
                             
                            </View>
                    )}
                    </View> 
                <View style={{marginTop:15, borderTopWidth:1, borderTopColor:'lightgrey'}}>
                        <View style={{paddingTop:15}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{ left:0, marginLeft:10, fontSize:18}}>Subtotal</Text>
                              
                                <Text style={{ right:0, marginRight:10, fontSize:18, position:'absolute'}}>${Math.round((totalPrice + addedPrice) * 100) / 100}</Text>
                                </View>
                               
                        </View>
                </View>
            </ScrollView>
     )}       
{cartItems.length === 0 && (
      <View style={{flex:1, justifyContent:'center', backgroundColor:'white', alignItems:'center'}}>
      <Text style={{marginBottom:10, fontSize:20, fontWeight:'600'}}>NOTHING ADDED...</Text>
      <Text style={{width:'60%',lineHeight:20}} numberOfLines={3} >...Join to start saving,or sign in to view your previous items added to cart! Online shopping made way easier.</Text>
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
)}
         
            </SafeAreaView>
    )
}