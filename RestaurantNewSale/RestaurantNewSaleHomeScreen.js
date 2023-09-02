import 'react-native-gesture-handler';
import 'react-native-reanimated';


import { StyleSheet,Dimensions,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';


import { EventRegister } from 'react-native-event-listeners';
// import {globalStyles} from '../Styles/GlobalStyles';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles} from '../Styles/globalstyles';

import RestaurantNewSaleHomeScreenComponent from '../RenderedComponents/RestaurantNewSaleHomeScreenComponent';

const {width,height} = Dimensions.get('window');



export default function RestaurantNewSaleHomeScreen() {

  

const [isPending, setIsPending] = useState(false);



   // const navigation = useNavigation();

  const [inventory, setInventory] = useState([
 
  {CategoryName:'Food',CategoryImage:require('../assets/food.png'),id:'2'},
  {CategoryName:'Drinks',CategoryImage:require('../assets/drinks.png'),id:'6'},
  // {CategoryName:'Others',CategoryImage:require('../assets/otherinentory.png'), id:'5'},
 
    ]);
  
 //FOR  APIS
//const { services:inventory, isPending, error } = useFetch(MyDomain+'/apis/Inventory/');


 
  return (
    <View style={globalstyles.container}>
  
   
<MinorHeader title="New sale" screenName="Restaurants Category" />







{ isPending ? (

<View 
style={globalstyles.ActivityIndicatorContainer}
>
  

  <ActivityIndicator 
  size="large" color="red" /> 
  </View>
  ):(


  <RestaurantNewSaleHomeScreenComponent inventory={inventory} />


)} 









    </View>
  );
}

const styles = StyleSheet.create({
 





});