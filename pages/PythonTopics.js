
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,ImageBackground,Animated,onPress, Alert } from 'react-native';
import React, { useState } from 'react';
export default function Home({navigation}) {
const [people, setPeople] = useState([
  { name: 'History',
   key: ' 1 ' ,
   desc:"To get better view click here  >",
   
   
  },
  { name: 'Features of Python',
   key: '2' ,
   desc:"To get better view click here >",
   image:require("../assets/syn.png")
  },
  { name: 'Operators',
   key: '3' ,
   desc:"To get better view click here >",
   image:require("../assets/doc.png")
  },
  { name: 'Variables and Constants',
   key: '4' ,
   desc:"To get better view click here >",
   image:require("../assets/stu.png")
  },
  { name: 'Datatypes',
   key: '5' ,
   desc:"To get better view click here >",
   image:require("../assets/flo.png")
  },
  { name: 'Type Conversions',
   key: '6' ,
   desc:"To get better view click here >",
   image:require("../assets/syn.png")
  },
  { name: 'Keywords & Identifiers',
   key: '7' ,
   desc:"To get better view click here >",
   image:require("../assets/loop.png")
  },
  { name: 'Conditional Statements',
   key: '8' ,
   desc:"To get better view click here >",
   image:require("../assets/if.png")
  },
  { name: 'Loops',
   key: '9' ,
   desc:"To get better view click here > ",
   image:require("../assets/point.png")
  },
  { name: 'Break & Continue',
     desc:"To get better view click here >",
     key: '10' ,
  
  image:require("../assets/link.png")
  },
  {
    name:'Strings',
    desc :"To get better view click here >",
    key:'11',
    image:require("../assets/link.png")

  },
  
  {
    name:'List',
    desc :"To get better view click here >",
    key:'12',
    image:require("../assets/link.png")

  },
  {
    name:'Tuple',
    desc :"To get better view click here >",
    key:'13',
    image:require("../assets/link.png")

  },
  {
    name:'Set',
    desc :"To get better view click here >",
    key:'14',
    image:require("../assets/link.png")

  },
  {
    name:'Dictionary',
    desc :"To get better view click here >",
    key:'15',
    image:require("../assets/link.png")

  },
  {
    name:'Functions',
    desc :"To get better view click here >",
    key:'16',
    image:require("../assets/link.png")

  },
  {
    name:'Builtin Functions',
    desc :"To get better view click here >",
    key:'17',
    image:require("../assets/link.png")

  },
  {
    name:'Lambda Functions',
    desc :"To get better view click here >",
    key:'18',
    image:require("../assets/link.png")

  },
  {
    name:'File Handling',
    desc :"To get better view click here >",
    key:'19',
    image:require("../assets/link.png")

  },
  {
    name:'Magic method',
    desc :"To get better view click here >",
    key:'20',
    image:require("../assets/link.png")

  },
  {
    name:'OOPS',
    desc :"To get better view click here >",
    key:'21',
    image:require("../assets/link.png")

  },
  {
    name:'Class & Objects',
    desc :"To get better view click here >",
    key:'22',
    image:require("../assets/link.png")

  },
  {
    name:'Constructor',
    desc :"To get better view click here >",
    key:'23',
    image:require("../assets/link.png")

  },
  {
    name:'Inheritance',
    desc :"To get better view click here >",
    key:'24',
    image:require("../assets/link.png"),

  },
  {
    name:'Operator Associativity',
    desc :"To get better view click here >",
    key:'25',
    image:require("../assets/link.png")

  },

  
  ]);
  const click=(item)=>{
    let key=item;
    if (key==' 1 ')
    {
      navigation.navigate("intro")
    }
    else if (key=="2")
    {
      navigation.navigate("screen2")
    }
    
  }
  
  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

return (
    
    <ImageBackground 
    source={{uri:"https://freepngimg.com/save/14704-python-logo-free-download-png/286*364"}}
    blurRadius={20}
    style={{backgroundColor:'black'}}
    >
  <View style={{paddingTop:40,paddingBottom:40,justifyContent:'center',alignItems:'center',marginTop:-2,marginBottom:1}}>
         
         <Image style={styles.img}
           source={require('../assets/pylogo.png')}
           />
           </View>
       
      <FlatList
      data={people}
      
      style={{marginBottom:"20%"}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) =>{
        
        
        return <TouchableOpacity onPress={() => click(item.key)}>
 <View style={styles.item}>
  
  <Image
  source={{uri:"https://freepngimg.com/save/14704-python-logo-free-download-png/286*364"}}
  style={{marginLeft:0,width:60,height:60}}
  >

  </Image>
  <View>

  <Text style={{fontWeight:'900',fontSize:15}}>{item.name}</Text>
  <Text >{item.desc}</Text>
  </View>
</View>
            </TouchableOpacity>
      }}/>
     
      </ImageBackground>
  
  );
  }
  
  const styles= StyleSheet.create({
    container:{
      width:360,
      height:'109%',
      flex:1,
      backgroundColor:"black",
      paddingTop:40,
      paddingHorizontal:20,
      
    },
    item:{
      marginTop:24,
      padding:15,
      marginBottom:5,
      backgroundColor:'whitesmoke',
      fontSize:24,
      flexDirection:'row',  
      justifyContent:'space-between',
      alignItems:"center",  
      borderRadius:10,
      shadowColor:"#000",
      shadowOffset:{
        width:0,
        height:10
      },
      shadowOpacity:1,
      shadowRadius:20,
      marginHorizontal:"8%",
    },   
    img:{
      position:'absolute',
      width:100,
      height:80,
      marginLeft:20,
      marginTop:45,
      
  
    }
  })
