import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import RetailsCustomersHomeScreen from '../RetailsCustomers/RetailsCustomersHomeScreen';
import RetailsInventoryHomeScreen from '../RetailsInventory/RetailsInventoryHomeScreen';
import RetailsInventoryFoodHomeScreen from '../RetailsInventory/RetailsInventoryFoodHomeScreen';
import RetailsInventoryDrinksHomeScreen from '../RetailsInventory/RetailsInventoryDrinksHomeScreen';
import RetailsReportsHomeScreen from '../RetailsReports/RetailsReportsHomeScreen'


import RetailsNewSaleHomeScreen from '../RetailsNewSale/RetailsNewSaleHomeScreen'



import RetailsNewSaleFoodHomeScreen from '../RetailsNewSale/RetailsNewSaleFoodHomeScreen';
import RetailsNewSaleDrinksHomeScreen from '../RetailsNewSale/RetailsNewSaleDrinksHomeScreen';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function RetailsStack( {naigation}){
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
      name="Retails Category"
      component={RetailsCategoriesHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Retails Customers"
      component={RetailsCustomersHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Retails Inventory"
      component={RetailsInventoryHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
 <Stack.Screen
      name="Retails Reports"
      component={RetailsReportsHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Retails Inventory Food"
      component={RetailsInventoryFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Retails Inventory Drinks"
      component={RetailsInventoryDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Retails NewSale"
      component={RetailsNewSaleHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Retails NewSale Food"
      component={RetailsNewSaleFoodHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Retails NewSale Drinks"
      component={RetailsNewSaleDrinksHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      </Stack.Navigator>
      	// </NavigationContainer>

    );
  }
  export default RetailsStack;