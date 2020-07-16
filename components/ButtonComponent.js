import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const ButtonComponent = (props) =>{

    const styles = StyleSheet.create({
        purpleBackground: {
            alignItems: "center",
            marginStart: 20,
            textAlign:"center",
            justifyContent: "center",
            textAlignVertical:"center",
            width: props.buttonWidth,
            height: props.buttonHeight,
            borderRadius: 30,
            backgroundColor: "rgba(108, 92, 189, 255)"
        },
        whiteBackground: {
            alignItems: "center",
            marginStart: 20,
            textAlign:"center",
            justifyContent: "center",
            textAlignVertical:"center",
            width: props.buttonWidth,
            height: props.buttonHeight,
            borderRadius: 30,
            borderColor:"rgba(108, 92, 189, 255)",
            borderWidth:1,
            backgroundColor: "rgba(255, 255, 255, 255)"
        },
        greyBackground :{
            alignItems: "center",
            marginStart: 20,
            textAlign:"center",
            justifyContent: "center",
            textAlignVertical:"center",
            width: props.buttonWidth,
            height: props.buttonHeight,
            borderRadius: 30,
            backgroundColor: "rgba(108, 92, 189, 255)"
        },
        whiteText :{
        fontFamily: "SF UI Text",
        fontSize: props.size,
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center",
        textAlignVertical:"center",
        color: "rgba(255, 255, 255, 255)"
        },
        blackText: {
            fontFamily: "SF UI Text",
            fontFamily: "SF UI Text",
            fontSize: props.size,
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            textAlignVertical:"center",
            color: "rgba(0, 0, 0, 255)"
        }
    });

    if(props.type == "primary"){
    return(
    <TouchableOpacity 
      onPress ={props.handleClick}
      style = {styles.purpleBackground} >
    <Text style = {styles.whiteText} > {props.text} </Text>
    </TouchableOpacity>
    );
}
else if(props.type == "secondary"){
    return(
        <TouchableOpacity 
          onPress ={props.handleClick}
          style = {styles.whiteBackground} >
        <Text style = {styles.blackText} > {props.text} </Text>
        </TouchableOpacity>
        );
}else{
    return(
        <TouchableOpacity 
          style = {styles.greyBackground} >
        <Text style = {styles.whiteText} > {props.text} </Text>
        </TouchableOpacity>
        );
}
};

export default ButtonComponent;