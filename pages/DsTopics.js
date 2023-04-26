import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,ImageBackground,Animated,onPress, Alert,Dimensions } from 'react-native';
import React, { useState } from 'react';
const {width,height}=Dimensions.get('screen');
export default function DsTopics({navigation}) {
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
    navigation.navigate("Feautures of C")
  }
  else if(key == '4')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '5')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '6')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '7')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '8')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '9')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '10')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '11')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '12')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '13')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '14')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '15')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '16')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '17')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '18')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '19')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '20')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '21')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '22')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '23')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '24')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '25')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '26')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '27')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '28')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '29')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '30')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '31')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '32')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '33')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '34')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '35')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '36')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '37')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '38')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '39')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '40')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '41')
  {
    navigation.navigate("Feautures of C")
  }
  else if(key == '42')
  {
    navigation.navigate("Feautures of C")
  }
}
const [people, setPeople] = useState([
  { name: 'Introduction',
   key: '1' ,
   desc:"To get better view click here >",
   image:require("../assets/learn1.png"),
  },
  { name: 'Linear DataStructures',
   key: '43' ,
   desc:"To get better view click here >",
   
   image:require("../assets/syn.png")
  },
  { name: 'arrays',
   key: '8' ,
   desc:"To get better view click here >",
   image:require("../assets/doc.png")
  },
  { name: 'Linked Lists',
  key: '2' ,
  desc:"To get better view click here >",
  image:require("../assets/stu.png")
 },
  { name: 'Stacks',
   key: '3' ,
   desc:"To get better view click here >",
   image:require("../assets/doc.png")
  },
  { name: 'Queues',
   key: '4' ,
   desc:"To get better view click here >",
   image:require("../assets/stu.png")
  },
  { name: 'NOn Linear DataStructures',
   key: '5' ,
   desc:"To get better view click here >",
   image:require("../assets/flo.png")
  },
  { name: 'Trees',
   key: '6' ,
   desc:"To get better view click here >",
   image:require("../assets/syn.png")
  },
  { name: 'Graphs',
   key: '7' ,
   desc:"To get better view click here >",
   image:require("../assets/loop.png")
  },
  { name: 'Designing algorithm',
   key: '9' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Time&Space Complexity',
   key: '10' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Big O notations',
   key: '11' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Omega notation',
   key: '12' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/doc.png")
  },
  { name: 'Theta Notation',
   key: '13' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/stu.png")
  },
  { name: 'LinearSarch',
   key: '14' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/flo.png")
  },
  { name: 'BinarySearch',
   key: '15' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/syn.png")
  },
  { name: 'Fibanacci Search',
   key: '16' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/loop.png")
  },
  { name: 'Bubble Sort',
   key: '17' ,
   desc:"Hello my name is naveed and",
   image:require("../assets/if.png")
  },
  { name: 'BubbleSort',
   key: '18' ,
   desc:"Hello my name is naveed and ",
   image:require("../assets/point.png")
  },
  { name: 'InsertionSort',
     desc:"Hello my name is naveed and",
     key: '19' ,
  
  image:require("../assets/link.png")
  },
  { name: 'SelectionSort',
  key: '20' ,
  desc:"Hello my name is naveed and",
  image:require("../assets/stu.png")
 },
 { name: 'MergeSort',
 key: '21' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 { name: 'RadixSort',

 key: '22' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 
 { name: 'QuickSort',

 key: '24' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 { name: 'HeapSort',

 key: '25' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 { name: 'Arrays vs LinkedList',

 key: '26' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 { name: 'MemoryRepresentation',

 key: '27' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
 { name: 'PolynomialAddition',

 key: '28' ,
 desc:"Hello my name is naveed and",
 image:require("../assets/stu.png")
},
{ name: 'PolynomialMultiplication',

key: '29' ,
desc:"Hello my name is naveed and",
image:require("../assets/stu.png")
},
{ name: 'SparseMatrix',

key: '30' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Infix to postfix',

key: '31' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'PostfixExpression Evaluation',

key: '32' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Queues using arrays',

key: '33' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Binary Treee Traversals',

key: '34' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Binar Search Tree',

key: '35' ,
desc:"Hello my name is naveed and",
image:require("../assets/stu.png")
},
{ name: 'AVL Trees',

key: '36' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'AVL Tree operations',
key: '38' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Graphs in DS',
key: '39' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'MST',

key: '40' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Kruskals Algorithm',

key: '41' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},
{ name: 'Dijkstra',

key: '42' ,
desc:"To get better view click here >",
image:require("../assets/stu.png")
},

]);
  
  const SPACING = 20;
  const AVATAR_SIZE = 70;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
 
  
  return (
      
      <ImageBackground 
      source={{uri:"http://www.snti.in/images/ds-card.png"}}
      blurRadius={50}
      >
         <View style={{paddingTop:40,paddingBottom:40,justifyContent:'center',alignItems:'center',marginTop:"0%",marginBottom:10}}>
      <Image style={styles.img}
        source={require('../assets/dslogo.png')}
        />
        </View>
      <FlatList
      data={people}
      showsVerticalScrollIndicator={false}
      style={{marginBottom:"30%"}}
      keyExtractor={(item) => item.name.toString()}
      renderItem={({item}) =>{
  
      
      return <TouchableOpacity onPress={()=>onclick(item.key)}>
        <View style={styles.item}>
  
          <Image
          source={{uri:"http://www.snti.in/images/ds-card.png"}}
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