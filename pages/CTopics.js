import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,ImageBackground,Animated,onPress, Alert,Dimensions } from 'react-native';
import React, { useState } from 'react';
const {width,height}=Dimensions.get('screen');
export default function CTopics({navigation}) {
  const onclick=(item)=>{
    let key=item;
    if(key == '1')
  {
    navigation.navigate("HistoryC")
  }
  else if(key == '2')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '3')
  {
    navigation.navigate("OperatorsC")
  }
  else if(key == '17')
  {
    navigation.navigate("Cond_C")
  }
  else if(key == '21')
  {
    navigation.navigate("InterViewQC")
  }
  else if(key == '11')
  {
    navigation.navigate("JumpStatements_C")
  }
  else if(key == '12')
  {
    navigation.navigate("FunctionsC")
  }
   }
const [people, setPeople] = useState([
  { name: 'History',
   key: '1' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/learn1.png"),
   
   
  },
  { name: 'Feutures of C',
   key: '2' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/syn.png")
  },
  { name: 'Operators',
   key: '3' ,
   desc:"To get better view click here >",
   image:require("../assets/doc.png")
  },
  { name: 'Strucuture of C',
  key: '22' ,
  desc:"Hello my name is naveed and",
  image:require("../assets/stu.png")
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
  { name: 'arrays',
   key: '8' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Strings',
   key: '9' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Strucutures in C',
  key: '10' ,
  desc:"Hello my name is naveed and",
  image:require("../assets/stu.png")
 },
  { name: 'Jump Statements',
   key: '11' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Functions',
   key: '12' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Unions in C',
   key: '13' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/stu.png")
  },
  { name: 'Flow charts',
   key: '14' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/flo.png")
  },
  { name: 'Printf()& scanf()',
   key: '15' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/syn.png")
  },
  { name: 'Loops',
   key: '16' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/loop.png")
  },
  { name: 'Conditional Checking',
   key: '17' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/if.png")
  },
  { name: 'Pointers',
   key: '18' ,
   desc:"Hello my name is naveed and ",
   image:require("../assets/point.png")
  },
  { name: 'Files',
     desc:"Hello my name is naveed and",
     key: '19' ,
  
  image:require("../assets/link.png")
  },
  { name: 'Simple Programs',
  key: '20' ,
  desc:"Hello my name is naveed and",
  image:require("../assets/stu.png")
 },
 { name: 'Tricky Programs',
 key: '22' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
  { name: 'Interview Questions',
  key: '21' ,
  desc:"Hello my name is naveed and",
  image:require("../assets/stu.png")
 },
 
  ]);
  
  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
 
  
  return (
      
      <ImageBackground 
      source={{uri:"https://img.icons8.com/color/480/c-programming.png"}}
      blurRadius={50}
      >
        
         <View style={{paddingTop:40,paddingBottom:40,justifyContent:'center',alignItems:'center',marginTop:-5,marginBottom:1}}>
         
      <Image style={styles.img}
        source={require('../assets/dslogo.png')}
        />
        </View>
        
      <FlatList
      data={people}
      style={{marginBottom:"20%"}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) =>{
  
      
      return <TouchableOpacity onPress={()=>onclick(item.key)}>
        <View style={styles.item}>
  
          <Image
          source={{uri:"https://img.icons8.com/color/480/c-programming.png"}}
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
      width:99,
      height:110,
      marginLeft:20,
      marginTop:25,
      
  
    }
  })