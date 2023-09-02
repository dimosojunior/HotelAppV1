import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import MinorHeader from '../Headers/MinorHeader';
import {globalstyles,images} from '../Styles/globalstyles';
import HomeCard from '../Shared/HomeCard';
import {Picker} from '@react-native-picker/picker';
import RestaurantReportComponent from '../RenderedComponents/RestaurantReportComponent';

import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

export default function RestaurantReportsHomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);


const AddReport =() =>{
  console.log("Report");
   setModalVisible(true);
}

  return (
    <SafeAreaView style={{ flex: 1 }}>

    <MinorHeader title="Reports" pressMe={AddReport} screenName="Restaurants Category" />
      <KeyboardAvoidingView

        behavior={Platform.OS == "ios" ? "padding" : ""}
         style={globalstyles.ReportKeyboardAvoidingView}

             >
        <View style={styles.DatePickerContainer}>
         























{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>PRINT REPORT</Text>

            <View style={globalstyles.form}>

               

                   
    

                


            </View>

            

          
            

            <View 

            style={[{
                      justifyContent:'center',
                      alignItems:'center'
                    },globalstyles.ButtonConatinere]}>
                    
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text 
                        style={globalstyles.ButtonAddText}
                      >PRINT REPORT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>












{/*mwanzo wa Report */}
























{/*mwisho wa Report */}


        </View>


      <RestaurantReportComponent />

        

      </KeyboardAvoidingView>





































    </SafeAreaView>
  );
}

const styles = StyleSheet.create({



});