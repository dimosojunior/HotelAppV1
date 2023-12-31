import 'react-native-gesture-handler';
import 'react-native-reanimated';

import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Animated,
  Modal
} from 'react-native';
import {globalstyles,images} from '../Styles/globalstyles';
import { MaterialIcons } from '@expo/vector-icons';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MinorHeader from '../Headers/MinorHeader';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';

import React, {useState, useEffect, useContext} from 'react';
import useFetch from '../useFetch';
import {Picker} from '@react-native-picker/picker';
import FoodCart from '../CartComponents/FoodCart';

// kama unatumia APIS toa hiyo projects prop


// gesture-tap-button, page-next-outline, MaterialCommunityIcons
// preview, queue-play-next - MaterialIcons
const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


const {width, height} = Dimensions.get('window');
 

const HotelNewSaleFoodHomeScreen =({navigation }) => {


  const [isPending, setIsPending] = useState(false);

  
 
//FOR SEARCHING
const [input, setInput] = useState('');
//console.log(input);

const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

const [modalVisibleAddProduct, setModalVisibleAddProduct] = useState(false);
  


const AddFood =() =>{
  console.log("Food");
   setModalVisibleAddProduct(true);
}

 const [isLoading, setIsloading] = useState(false);
  const Yscroll = React.useRef(new Animated.Value(0)).current;






 const [drinks, setDrinks] = useState([
  {
    FoodName1:'Pilau',
    Unit:'Sahani 1',
    FoodName2:'Maharage',
    FoodImage:require('../assets/i2.png'),
    DrinkPrice:2000,
    id:'1'
  },

 {
    FoodName1:'Wali',
    Unit:'Sahani 1',
    FoodName2:'Maharage',
    FoodImage:require('../assets/i3.png'),
    DrinkPrice:3000,
    id:'2'
  },

   {
    FoodName1:'Ugali',
    Unit:'Sahani 1',
    FoodName2:'Maharage',
    FoodImage:require('../assets/i4.png'),
    DrinkPrice:4000,
    id:'3'
  },
 
  
    ]);



 //FOR APIS
//const { services:food, isPending, error } = useFetch(MyDomain+'/apis/Food/');














    
      
 


  return (
    <View style={globalstyles.AllListcontainer}>


<MinorHeader title="Food" pressMe={AddFood} screenName="Hotel NewSale" />






{/*MWANZO WA VIEW YA SEARCH*/}

      <View 
      style={globalstyles.SearchContainer}
      >
        
        <View
          
            
       style={globalstyles.InputContainer}     
            

          >

          <TouchableOpacity>
          {/*<FontAwesome size={20} name="search" />*/}
          
          <TextInput
          style={globalstyles.TextInput}
          value={input} onChangeText ={(text) => setInput(text)}
            
            placeholder="Search food"
          />
          </TouchableOpacity>
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}





<FoodCart />



<View style={globalstyles.CartListHeaderContainer}>
    <Text style={globalstyles.CartListHeader}>Food</Text>
    </View>




      <FlatList
        data={drinks}
        renderItem={({item, index}) => {

          // mwanzo kwa ajili ya search
    if (input === ""){

          return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.FoodName1}</Text>
                <Text style={globalstyles.descText}>{item.FoodName2}</Text>
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.Unit}  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.DrinkPrice}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                onPress={() => setModalVisible(true)}
               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>
             </View>   
             
            </View>
          );



// hili bano la chini ni la if ya juu kama mtu akitype   
}





if(item.FoodName1.toLowerCase().includes(input.toLowerCase())){






          return (
            <View style={globalstyles.itemView}>
            <View
            style={globalstyles.FoodNameView}

            >
                       <Text style={globalstyles.nameText}>{item.FoodName1}</Text>
                <Text style={globalstyles.descText}>{item.FoodName2}</Text>
             </View>
                              

                <View style={globalstyles.priceView}>

                <Text style={globalstyles.UnitText}>
                    {item.Unit}  
                  </Text>

                  <Text style={globalstyles.priceText}>
                    {item.DrinkPrice}/=
                  </Text>
                  
                </View>
            

              
              
              <View 
              style={globalstyles.IconContainer}
              >

                <TouchableOpacity
                onPress={() => setModalVisible(true)}
               >
                <MaterialCommunityIcons 
    name="gesture-tap-button"
     size={30} 
     color="green"
    style={globalstyles.ClickableIcon}

     />
                  
                </TouchableOpacity>
             </View>   
             
            </View>
          );








// hili bano la chini ni la if ya pili mwisho
  }


          // mabano ya chini ni kufunga render item
        }}
      />
















{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ORDER PRODUCT</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}> Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder=' Quantity' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}>Total Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Total Price' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
              < View style={globalstyles.inputTax}>
                        <Text style={globalstyles.TaxType}>
                            Tax Type
                        </Text>

                 <View style={globalstyles.picker}>

                        
                            <Picker
                            style={globalstyles.pickerInput}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Select Tax" value="Julius" />
                             <Picker.Item label="Kasamka" value="Kasamka" />
                             <Picker.Item label="Dimoso" value="Dimoso" />
                             <Picker.Item label="Neema" value="Neema" />
                                
                            </Picker>

                     </View>
                      
                        
                        {/* <InputModeOptions placeholder="Select Tax"></InputModeOptions> */}
                        {/* <TextInput style={globalstyles.textInput}  placeholder='Unit Price' /> */}
                    </View>
                </View>


            </View>

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text style={{
                          color:'white',
                        }}>CONFIRM</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>






















{/*-----------------MODAL FOR ADD PRODUCT---------------*/}



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleAddProduct}
        onRequestClose={() => setModalVisibleAddProduct(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD PRODUCT</Text>

            <View style={globalstyles.form}>
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}>Product Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Quantity' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                    <Text style={{ fontSize:16, marginLeft:3 }}>Product Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.InputIcon} name='plus-circle'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Price' />
                    </View>
                </View>

                <View  style={{ marginTop:20 }}>
                   
             {/*EMPTY NOW*/}
                </View>


            </View>

            

           
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisibleAddProduct(false)} >
                        <Text>ADD PRODUCT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>


















    </View>
  );
};















  
export default HotelNewSaleFoodHomeScreen;



const styles = StyleSheet.create({

});