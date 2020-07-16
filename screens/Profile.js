import React, {useState, Component} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import CardComponent from '../components/CardComponent';
import {API, graphqlOperation} from 'aws-amplify';

import { Actions } from 'react-native-router-flux';S


gotoclassroom = () => {
  Actions.classroom();
}

export default class Profile extends Component {

  state = {student : ""}

  async componentDidMount(){
    const studentData = await API.graphql(graphqlOperation(getStudent(1)))
    this.setState({
      student : studentData.data.getStudent
    })
  }

  gotohome = () => {
    Actions.home();
  }

  gotosettings = () =>{
    Actions.usersettings();
  }
  

  render(){

  return (
    <View style = {{
        "alignItems": "flex-start",
        "width": "100%",
        "height": "100%",
        "backgroundColor": "rgba(255, 255, 255, 255)"
    }}>
    <View style = {
      {
        "alignItems": "flex-start",
        "width": "100%",
        flexDirection:"row",
        marginTop:0,
        "height": "33%",
        "backgroundColor": "rgba(255, 255, 255, 255)",
        justifyContent: "space-around",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 4,
      }
    }
    ><TouchableOpacity onPress = {this.gotohome}>
    <ImageBackground source={require('../assets/arrow_back.png')} style={{marginTop:"10%",width: 10, height: 18}}></ImageBackground></TouchableOpacity>
    <View style={{marginTop:"10%", flexDirection:"column", justifyContent:"space-around"}}>
      <ImageBackground source={require('../assets/avatar.jpg')} imageStyle={{ borderRadius: 50, borderWidth:3, borderColor: "rgba(108, 92, 189, 255)" }} style={{width: 90, height: 90}}></ImageBackground>
  <Text style={{marginTop:"10%",textAlign:"center",fontFamily:"SF UI Text",color:"rgba(108, 92, 189, 255)",fontSize:20}}>{this.state.student}</Text>
      <Text style={{marginTop:"10%",textAlign:"center",fontFamily:"SF UI Text",color:"rgba(18, 18, 18, 255)",fontSize:14}}>18BBA7021</Text>
    </View>
    <TouchableOpacity onPress = {this.gotosettings}>
    <ImageBackground source={require('../assets/settings.png')} style={{marginTop:"10%",width: 25, height: 25}}></ImageBackground></TouchableOpacity>
    </View>
    <View style={{justifyContent:"center", alignContent:"center", marginLeft:"auto",marginRight:"auto"}}>
      <View style={{justifyContent:"center", alignContent:"center", marginLeft:"auto",marginRight:"auto"}}><Text style={{marginTop:"8%",textAlign:"center",fontFamily:"SF UI Text",color:"rgba(108, 92, 189, 255)",fontSize:24}}>Courses</Text></View>
      <TouchableOpacity onPress = {this.gotoclassroom}><CardComponent focus ="yes" /></TouchableOpacity>
    </View>
    </View>
  );
  }
};
