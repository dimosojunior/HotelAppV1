import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RestaurantCustomersHomeScreen from '../RestaurantCustomers/RestaurantCustomersHomeScreen';
import RestaurantInventoryHomeScreen from '../RestaurantInventory/RestaurantInventoryHomeScreen';
import RestaurantInventoryFoodHomeScreen from '../RestaurantInventory/RestaurantInventoryFoodHomeScreen';
import RestaurantInventoryDrinksHomeScreen from '../RestaurantInventory/RestaurantInventoryDrinksHomeScreen';
import RestaurantReportsHomeScreen from '../RestaurantReports/RestaurantReportsHomeScreen'


import RestaurantNewSaleHomeScreen from '../RestaurantNewSale/RestaurantNewSaleHomeScreen'



import RestaurantNewSaleFoodHomeScreen from '../RestaurantNewSale/RestaurantNewSaleFoodHomeScreen';
import RestaurantNewSaleDrinksHomeScreen from '../RestaurantNewSale/RestaurantNewSaleDrinksHomeScreen';


import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function RestaurantStack( {naigation}){
  return (
  //kama unatumia drawer navigator na stack navigator haina haja ya kus
  //sorround hii stack.navigator na NavigationContainer ila km unatumia
  //stack navigation peke yake basi tumia NavigationContainer

// <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home Stack"
      screenOptions={{
      	headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >

















<Stack.Screen
      name="Restaurants Category"
      component={RestaurantCategoriesHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Restaurant Customers"
      component={RestaurantCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Restaurant Inventory"
      component={RestaurantInventoryHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


       <Stack.Screen
      name="Restaurant Reports"
      component={RestaurantReportsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Restaurant Inventory Food"
      component={RestaurantInventoryFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Restaurant Inventory Drinks"
      component={RestaurantInventoryDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




<Stack.Screen
      name="Restaurant NewSale"
      component={RestaurantNewSaleHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Restaurant NewSale Food"
      component={RestaurantNewSaleFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Restaurant NewSale Drinks"
      component={RestaurantNewSaleDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />





      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default RestaurantStack;