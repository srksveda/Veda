import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import ClassesCardComponent from '../components/ClassesCardComponent';
import Actions from 'react-native-router-flux';

gotoclassroom = () =>{
  Actions.classroom();
}

const Schedule = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1,
      backgroundColor:"#FFF"}}>
      <View style = {
      {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "marginTop":"5%",
        "padding":"5%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)"
      }
    } > S </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(108, 92, 189, 255)",
        "marginStart": "9%"
      }
    } > M </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": "9%"
      }
    } > T </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": "9%"
      }
    } > W </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": "9%"
      }
    } > T </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": "9%"
      }
    } > F </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 18,
        "color": "rgba(161, 154, 154, 255)",
        "marginStart": "9%"
      }
    } > S </Text>
    </View>
    <View  style={{"marginBottom":"10%"}}>
      <TouchableOpacity onPress = {this.gotoclass}><ClassesCardComponent time ="8 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/></TouchableOpacity>
      <ClassesCardComponent time ="9 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="10 AM" subID = "MAT1001" subName = "Engineering Calculus" status = "active"/>
      <ClassesCardComponent time ="11 AM" subID = "-" subName = "Leisure" status = "leisure"/>
      <ClassesCardComponent time ="12 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="1 PM" subID = "-" subName = "Lunch" status = "leisure"/>
      <ClassesCardComponent time ="2 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="3 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="4 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="5 PM" subID = "-" subName = "Leisure" status = "leisure"/>
      <ClassesCardComponent time ="6 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      <ClassesCardComponent time ="7 PM" subID = "MAT1001" subName = "Engineering Calculus" status = "inactive"/>
      </View>
     </ScrollView>
  );
}

export default Schedule;