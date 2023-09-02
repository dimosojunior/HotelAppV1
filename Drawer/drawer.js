import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer, DarkTheme,DefaultTheme} from '@react-navigation/native';

// import Header from '../Shared/header';


import { StyleSheet,Image,Switch,Dimensions,ScrollView,TouchableOpacity, Text, View, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, AntDesign} from '@expo/vector-icons';



import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
// import HomeScreen from '../Screens/HomeScreen';
 import MyStack from '../Stack/Stack';
 import RestaurantStack from '../Stack/RestaurantStack';
import RetailsStack from '../Stack/RetailsStack';

import UsersScreen from '../Screens/UsersScreen';
import AboutScreen from '../Screens/AboutScreen';
import ShareScreen from '../Screens/ShareScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';






 import Slider from '../Screens/Slider';
// import HotelCategoriesHomeScreen from '../Hotels/HotelCategoriesHomeScreen';
// import RestaurantCategoriesHomeScreen from '../Restaurants/RestaurantCategoriesHomeScreen';
// import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
const Drawer = createDrawerNavigator();
function MyDrawer({navigation}){

  const {width,height} = Dimensions.get('window');






  return(



     <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <ScrollView>
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
                <View
                  style={{
                    // height: height,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    marginBottom:12,
                    
                  }}
                >
                  <Image
                    source={require('../assets/i3.png')}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      marginBottom:10,
                      marginTop:10,
                    }}
                  />

   </View>


                  
             







                <DrawerItemList {...props} />
             





      <View style={{
        marginTop:50,
        alignItems:'center',

      }}>
      <TouchableOpacity>
        <Text style={{
        bottom:0,
        backgroundColor:'red',
        paddingVertical:10,
        paddingHorizontal:40,
        color:'white',
        fontWeight:'bold',
        borderRadius:10,
        fontSize:18,

      }}>Logout</Text>
      </TouchableOpacity>
      </View>        





              </View>
              </ScrollView>
            )
          }
        }
        screenOptions={{
        headerShown:false,
          drawerStyle: {
            // backgroundColor: 'rgb(5,5,49)',
            backgroundColor: '#F0F0F0',
            width: 260
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "black",
            fontSize:16,

          },
          // drawerIconStyle: {
          //   color: "white",
          //   fontSize:16,
          //   border:4,
          //   borderColor:'red',

          // }
        }}
      >
        <Drawer.Screen
          name="Hotel user"
          options={{
            drawerLabel: "Hotel user",
            title: "Hotel user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="home" size={20} color="black" />
              </View>
            )
          }}
          component={MyStack}
        />

     <Drawer.Screen
          name="Restaurant user"
          options={{
            drawerLabel: "Restaurant user",
            title: "Restaurant user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="industry" size={20} color="black" />
              </View>
            )
          }}
          component={RestaurantStack}
        />


         <Drawer.Screen
          name="Retail user"
          options={{
            drawerLabel: "Retail user",
            title: "Retail user",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <MaterialIcons name="book" size={20} color="black" />
              </View>
            )
          }}
          component={RetailsStack}
        />


  


<Drawer.Screen
          name="About"
          options={{
            drawerLabel: "About",
            title: "About",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <AntDesign name="exclamationcircleo" size={20} color="black" />
              </View>
            )
          }}
          component={AboutScreen}
          />


<Drawer.Screen
          name="Users"
          options={{
            drawerLabel: "Users",
            title: "Users",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="users" size={20} color="black" />
              </View>
            )
          }}
          component={UsersScreen}
        />





<Drawer.Screen
          name="Share"
          options={{
            drawerLabel: "Share",
            title: "Share",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="share" size={20} color="black" />
              </View>
            )
          }}
          component={ShareScreen}
          />



          <Drawer.Screen
          name="Change Password"
          options={{
            drawerLabel: "Change Password",
            title: "Change Password",
            
            drawerIcon: () => (
              <View style={{
                // backgroundColor:'lightblue',
                // border:2,
                // borderColor:'black',
                // borderWidth:2,
                // padding:7,
                // borderRadius:6,
              }}>
              <FontAwesome name="unlock-alt" size={20} color="black" />
              </View>
            )
          }}
          component={ChangePasswordScreen}
          />





         



      
      </Drawer.Navigator>
    </NavigationContainer>
    
    

    );
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });