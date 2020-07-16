import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const widthDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};




const Reset = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // handleLogin = () => {
  //   })
  //   .catch(e => {
  //     if (e.code === 'auth/invalid-email') {
  //       console.log('email invalid');
  //     }

  //     if (e.code === 'auth/user-not-found') {
  //       console.log('User not found');
  //     }
  //     if (e.code === 'auth/wrong-password') {
  //       console.log('Password entered is wrong');
  //     }

  //     console.error(e);
  //   });
  // }

  return(
    <ImageBackground source={require('../assets/line.png')} style={{width: '100%', height: '100%'}}>
    <View style = {
      {
        "alignItems": "center",
        "flex": 1,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto"
      }
    } >



    <View style = {
      {
        "alignItems": "flex-start",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "width": "80%",
        "height": "70%"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 26,
        "color": "rgba(108, 92, 189, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto"
      }
    } > Reset Password </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 12,
        "color": "rgba(58, 57, 57, 255)",
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "marginTop": 7.5
      }
    } > Change your Password from Default </Text>
    <TextInput
    style = {
      {
        "alignItems": "flex-start",
        "marginTop": 47.5,
        "width": 242.5,
        "height": 48,
        "borderRadius": 24,
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TextInput
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33.5,
        "width": 242.5,
        "height": 48,
        "padding": 15,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "borderRadius": 24,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TouchableOpacity
      style = {
      {
        "alignItems": "center",
        "marginStart": 59.5,
        "marginTop": 40,
        "justifyContent":"center",
        "marginLeft":"auto",
        "marginRight":"auto",
        "width": 120,
        "height": 45,
        "borderRadius": 25,
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Submit </Text>
    </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>

  )
}

export default Reset