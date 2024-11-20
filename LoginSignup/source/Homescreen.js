import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { fonts } from './utils/fonts';
import { colors } from './utils/colors';
import { useNavigation } from '@react-navigation/native';


const Homescreen = () => {
  const navigation = useNavigation("LOGIN");
  const handlelogin =()=>{
    navigation.navigate("LOGIN");
    
  }
  const handlesignup =()=>{
    navigation.navigate("SIGNUP");
    
  }
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png") } style={styles.logo}></Image>
      <Image source={require("./assets/man.png")} style={styles.bannerimage}></Image>
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.subtitle}>lojvnsjnvdkjvnskjgvjfbnbnxmfdkgjibfj jvnsjkgdkv ncd,njks nvjnsjk</Text>
      <View style={styles.overallbuttoncontainer}>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity 
        style={[styles.loginbuttonwrapper,
        { backgroundColor:colors.primary,}]}
        onPress={handlelogin}>
        <Text style={styles.loginbuttontext}>Login</Text>
        </TouchableOpacity>
        </View>
       <View style={styles.buttoncontainer}> 
        <TouchableOpacity style={[styles.signinbuttonwrapper]} onPress={handlesignup}>
        <Text style={styles.signupbuttontext}>Signup</Text>
        </TouchableOpacity></View>
      </View>
        
       

  

    </View>
  )
}


export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'

    },
    logo:{
        height:40,
        width:150,
        marginVertical:50,


    },
    bannerimage:{
      marginVertical:20,
      height:250,
      width:230,
    },
    title:{
      fontSize:45,
      fontFamily:fonts.Semibold,
      padding:20,
      textAlign:'center',
      color:colors.primary,
      marginTop:40,
      
    },
    subtitle:{
      fontSize:15,
      textAlign:'center',
      color:colors.secondary,
      fontFamily:fonts.Medium,
      paddingHorizontal:30,
      marginVertical:20,


    },
    overallbuttoncontainer:{
      flexDirection:'row',
      marginHorizontal:20,
      gap:10,
    },

    buttoncontainer:{
      flexDirection:'row',
      marginTop:20,
      borderWidth:2,
      borderColor:colors.primary,
      width:'50%',
      height:50,
      borderRadius:100,

    },
    loginbuttonwrapper:{
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      borderRadius:100,

    },
    signinbuttonwrapper:{
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      borderRadius:100,


    },
    loginbuttontext:{
      fontSize:18,
      fontFamily:fonts.Semibold,
      color:colors.white,

    },
    signupbuttontext:{
      fontSize:18,
      fontFamily:fonts.Semibold,
      color:colors.secondary,

    }
})