import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ButtonComponent from '../components/ButtonComponent';

const CardComponent = (props) => {

    const styles = StyleSheet.create({  
      focused: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginLeft: "auto",
        marginRight:"auto",
        paddingStart: "5%",
        paddingEnd:"5%",
        width: "90%",
        height: "120%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "rgba(108,92,189,255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },
      unfocused :{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginLeft: "auto",
        marginRight:"auto",
        paddingStart: "5%",
        paddingEnd:"5%",
        width: "90%",
        height: "120%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "rgba(108, 92, 189, 255)",
        backgroundColor: "rgba(255, 255, 255, 255)"
      },
      textStyle: {
        fontFamily:"SF UI Text",
        fontSize: 18,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
        paddingLeft: "3%",
        paddingRight: "2%"
      },
      textStyleSub: {
        fontFamily:"SF UI Text",
        fontSize: 18,
        color:"rgba(18,18,18,255)",
        textAlign: "center",
        paddingLeft: "3%",
        paddingRight: "2%",
        width: "35%"
      },
    });
    if(props.focus=="yes"){
      return(
        <View style={{"marginTop":"5%"}}>
          <View style={{"flexDirection": "row", "alignItems":"center", "marginTop":"5%", "marginBottom":"10%"}}>
          <View style={styles.focused}>
            <Text style={styles.textStyle}>CSE1001</Text>
            <Text numberOfLines={1} style={styles.textStyleSub}>Introduction to Programming</Text>
            <ButtonComponent buttonWidth="25%" buttonHeight="32%" type="primary" text="View" size={14}></ButtonComponent>
          </View>
        </View>
        <View style={{"flexDirection": "row", "alignItems":"center", "marginTop":"5%", "marginBottom":"10%"}}>
        <View style={styles.unfocused}> 
          <Text style={styles.textStyle}>MAT1001</Text>
          <Text numberOfLines={1} style={styles.textStyleSub}>Engineering Calculus</Text>
          <ButtonComponent buttonWidth="25%" buttonHeight="32%" type="primary" text="View" size={14}></ButtonComponent>
        </View>
      </View>
        </View>
      );
    }
};

export default CardComponent;