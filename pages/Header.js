import { StyleSheet, Text, View ,Image, TouchableOpacity,} from 'react-native';
import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';

const Header=() =>{
 
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <View >
          <Image style={{width:70,height:70,marginTop:-20}} source={require('../assets/logo.png')}/>
        </View>
        </TouchableOpacity>
        <View style={styles.h1}>
      <Image style={{width:200,height:50}}source={require('../assets/welearni.png')}/>
      </View>
    </View>
  );
}
export default Header
const styles=StyleSheet.create({
    header:{
        paddingTop:30,
        flexDirection:"row", 
        padding:2,
        borderBottomWidth:1,
        borderBottomColor:"black",
        backgroundColor:'black',
        
    },
    
    t:{
        color:"white",
        fontFamily:"",
        fontWeight:"bold",
        fontSize:30,
        fontStyle:"italic",
    },
    t1:{
        color:"black",
        fontFamily:"",
        fontWeight:"bold",
        fontSize:30,
        fontStyle:"italic"

    },
    h1:{
        flexDirection:'row',
        marginLeft:'10%',
    },
    logo:{
        backgroundColor:'black',
        borderRadius:40,
        marginTop:-10,
        marginLeft:6
    }
    
})