import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import ButtonComponent from '../components/ButtonComponent';
import { Actions } from 'react-native-router-flux';

gotohome = () =>{
  Actions.home();
}

const ClassRoom = ({ navigation }) => {
  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"12%",shadowColor:"#000",shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.9,shadowRadius:3,elevation:4}}>
        <Text style={{fontFamily:"SF UI Text",fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"10%",marginRight:"10%",marginTop:"auto",marginBottom:"auto"}}>CSE1001</Text>
        <TouchableOpacity onPress = {this.gotohome}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 18, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"100%", width:"100%"}}>
        <ImageBackground source={require('../assets/lines.png')} style={{alignContent:"center",width: "100%", height: "90%"}}>
          <View style={{flexDirection:"column",justifyContent:"space-around",marginTop:"20%",marginBottom:"auto"}}>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
              <ButtonComponent style={{marginLeft:"auto",marginRight:"auto"}} buttonWidth="40%" buttonHeight="45%" type="primary" text="JOIN CLASS" size={14} ></ButtonComponent>
              <ButtonComponent style={{marginRight:"auto",marginLeft:"auto"}} buttonWidth="40%" buttonHeight="45%" type="secondary" text="MEMBERS" size={14}></ButtonComponent>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <ClassesCardComponent time ="Assignment" subID = "Due Today" status = "assignment"/>
            </View>
            <View style={{marginLeft:"10%",marginRight:"10%",marginTop:"5%"}}>
            <ClassesCardComponent time ="Notice" subID = "Refer page 23 in the PDF mailed and complete the exercise" status = "notice"/>
            </View>
          </View>
        </ImageBackground>
        
      </View>
    </View> 
  );
}

export default ClassRoom;