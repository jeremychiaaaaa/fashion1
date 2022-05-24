import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import { doc, getFirestore, getDoc, collection, setDoc, serverTimestamp, updateDoc, runTransaction, addDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Wd0sZgHrZysFyagLCAqO5yc4gTgb9kw",
  authDomain: "ecommerce-7700c.firebaseapp.com",
  databaseURL: "https://ecommerce-7700c-default-rtdb.firebaseio.com",
  projectId: "ecommerce-7700c",
  storageBucket: "ecommerce-7700c.appspot.com",
  messagingSenderId: "442296633161",
  appId: "1:442296633161:web:d9f11663ed55836b55bc98",
  measurementId: "G-21LPP94YHE"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app= firebase.initializeApp(firebaseConfig);
} else {
    app=firebase.app()
}
export const createUserDocument = async (user,additionalData) => {
    if(!user) return;
    const db=getFirestore()
          const colRef = collection(db, 'trial')
          const uid = user.user.uid
          console.log(uid)
    const userRef = doc(db, 'trial', uid) 
  const snapshot = await getDoc(userRef)
  
  if(!snapshot.exists()){
    
    const {username} = additionalData
  
    try {
      setDoc(userRef,{
       username,
       temp:[]
      })
    } catch(error){
      console.log(error.message)
    }
  }
  }
  export const createCart = async (user, additionalData) => {
    if(!user) return;
    const db = getFirestore()
    const colRef = collection(db, 'trial')
    const uid = user.user.uid
    console.log(uid)
    const userRef = doc(db,'trial',uid)
    const {temp} = additionalData
    const snapshot = await getDoc(userRef)
  console.log('snapshot is' + snapshot)
  
    try{
      updateDoc(userRef, {
        temp:arrayUnion(...temp)
      },)
    } catch(error){
      console.log(error.message)
    }
  }
  export const getCartItems = async (user) => {
    if(!user) return;
    const db = getFirestore()
    const colRef = collection(db, 'trial')
    const uid = user.user.uid
    console.log(uid)
    const userRef = doc(db,'trial',uid)
    
    try {
      const docsnap = await getDoc(userRef)
  
      console.log(docsnap.data())
      console.log('Got data')
      return docsnap
    } catch (error) {
      console.log(error.message)
    }
  
  }
export default firebase