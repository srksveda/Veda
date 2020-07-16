import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import SettingsComponent from '../components/SettingsComponent';
import ButtonComponent from '../components/ButtonComponent';
import { Actions } from 'react-native-router-flux';

gotoprofile = () => {
  Actions.profile();
}


function UserSettings () {
  return (
    <View style={{height:"100%"}}>
      <View style={{flexDirection:"row",justifyContent:"space-between", backgroundColor:"#FFF",width:"100%",height:"20%"}}>
        <TouchableOpacity onPress = {this.gotoprofile}><ImageBackground source={require('../assets/arrow_back.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",width: 10, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
        <Text style={{fontFamily:"SF UI Text",fontSize:24, color:"#121212", textAlignVertical:"center",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"}}>Settings</Text>
        <TouchableOpacity onPress = {this.gotoprofile}><ImageBackground source={require('../assets/close.png')} style={{alignContent:"center",marginTop:"auto",marginBottom:"auto",opacity:0,width: 18, height: 18,marginLeft:"auto",marginRight:"auto",}}></ImageBackground></TouchableOpacity>
      </View>
      <View style={{height:"80%"}}>
        <View style={{height:"15%",marginTop:"3%"}}>  
            <SettingsComponent time = "Edit Mobile Number"></SettingsComponent>
            <SettingsComponent time = "Change Password"></SettingsComponent>
        </View>
        <View style={{height:"100%", marginTop:"40%"}}>
        <View style={{height:"30%",flexDirection:"row","justifyContent":"center","marginLeft":"auto","marginRight":"auto"}}>
            <Text style={{"marginTop":"12%",fontFamily: "SF UI Text",fontWeight: "400",fontSize: 18,textAlign:"left",color: "#121212",paddingTop:"5%",paddingRight:"7%"}}>Change Display Picture</Text>
            <ImageBackground source={require('../assets/Pic.png')} style={{"marginTop":"12%","marginLeft":"auto","marginRight":"auto",alignContent:"center",width: 60, height: 60,marginLeft:"auto",marginRight:"auto",}}></ImageBackground>
        </View>
        <View style={{height:"20%",flexDirection:"row","justifyContent":"center","marginLeft":"auto","marginRight":"auto"}}>
            <ButtonComponent style={{marginLeft:"auto",marginRight:"auto"}} buttonWidth="40%" buttonHeight="45%" type="primary" text="SAVE" size={14} ></ButtonComponent>
            <ButtonComponent style={{marginRight:"auto",marginLeft:"auto"}} buttonWidth="40%" buttonHeight="45%" type="secondary" text="CANCEL" size={14}></ButtonComponent>
        </View>
        </View>
      </View>
    </View> 
  );
}

export default UserSettings;