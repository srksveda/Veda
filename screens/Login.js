import React, {useState} from 'react';
import {View,Text,TextInput,TouchableOpacity, ScrollView,ImageBackground, ImageBackgroundBase} from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';


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







const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

async function SignIn() {
  try {
      const user = await Auth.signIn(email, password);
      console.log({user});
      Actions.profile();
  } catch (error) {
      console.log('error signing in', error);
  }
}

  handleLogin = () => {
    SignIn()
  }

  return(
    <ImageBackground source={require('../assets/line.png')} style={{width: '100%', height: '100%'}}>
    <View style = {
      {
        "alignItems": "center",
        "flex": 1,
        "justifyContent":"center"
      }
    } >



    <View style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 39,
        "paddingTop": 124,
        "width": 320,
        "height": 568
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontWeight": "400",
        "fontSize": 24,
        "color": "rgba(108, 92, 189, 255)",
        "marginStart": 54.5
      }
    } > Hey, There! </Text>
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 11,
        "color": "rgba(58, 57, 57, 255)",
        "marginStart": 43.5,
        "marginTop": 7.5
      }
    } > Enter your credentials to login </Text>
    <TextInput 
      autoCapitalize="none"
      placeholder="Email"
      onChangeText={email => setEmail(email)}
      value={email}style = {
      {
        "alignItems": "flex-start",
        "marginTop": 47.5,
        "width": 242.5,
        "height": 48,
        "borderRadius": 24,
        "padding": 15,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TextInput 
      secureTextEntry
      autoCapitalize="none"
      placeholder="Password"
      onChangeText={password => setPassword( password )}
      value = {password}
      style = {
      {
        "alignItems": "flex-start",
        "marginTop": 33.5,
        "width": 242.5,
        "height": 48,
        "padding": 15,
        "borderRadius": 24,
        "backgroundColor": "rgba(244, 244, 254, 255)"
      }
    }
    />
    <TouchableOpacity 
      onPress ={this.handleLogin}
      style = {
      {
        "alignItems": "flex-start",
        "paddingStart": 41,
        "paddingTop": 12,
        "marginStart": 59.5,
        "marginTop": 33.5,
        "width": 128,
        "height": 42.5,
        "borderRadius": 21.25,
        "backgroundColor": "rgba(108, 92, 189, 255)"
      }
    } >
    <Text style = {
      {
        "fontFamily": "SF UI Text",
        "fontSize": 14,
        "color": "rgba(255, 255, 255, 255)"
      }
    } > Login </Text>
    </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>

  )
}

export default Login