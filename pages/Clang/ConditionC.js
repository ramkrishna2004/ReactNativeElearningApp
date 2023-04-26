import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView, Button, TouchableOpacity,Dimensions, ImageBackground} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
const {w,h}=Dimensions.get("screen");
const data=[
    {vid:'Led5aHdLoT4'}
]

function Videos(){
  const vidW=w;
return(
        <ScrollView>
              <View style={{marginVertical:'10%',justifyContent:'center'}}>
                <YoutubePlayer
                height={200}
                width={vidW}
                videoId={'Led5aHdLoT4'}/>
              </View>
              <View style={{marginVertical:'10%',justifyContent:'center'}}>
              <YoutubePlayer
              height={200}
              width={vidW}
              videoId={'-JMSaLRqsgo'}/>
            </View>
              
  </ScrollView>
)
}

export default function ConditionC() {
    
    const [scrn,setScrn]=useState()
    const updateN=()=>{
            setScrn("Notes")
        
    }
    const updateV=()=>{
            setScrn("Videos")
        
    }
    return(<ImageBackground 
      source={{uri:"https://img.icons8.com/color/480/c-programming.png"}}
      blurRadius={50}
      style={StyleSheet.absoluteFillObject}
      >
        <View>
        <View style={{justifyContent:'center' ,alignItems:'center',marginTop:80,flexDirection:'row'}}>
            <TouchableOpacity onPress={updateN}>
            <View style={{padding:10,backgroundColor:'rgba(90,100,245,1.0)',borderRadius:30,marginHorizontal:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Notes</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={updateV}>
             <View style={{padding:10,backgroundColor:'rgba(90,100,245,1.0)',borderRadius:30,marginHorizontal:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'white'}}>Vedios</Text>
            </View>
            </TouchableOpacity>
            <View>
            </View>
        </View>
            {(scrn==="Notes")&&(<Notes/>)}
        {(scrn==="Videos")&&(<Videos/>)}
        </View>
        </ImageBackground>
    )
}
const dt=[
    {title:' If statement in C',
     desc:' if statement is the most simple decision - making statement. It is used to  decide  whether  a certain statement or block of statements will be executed or not i.e if a certain condition is true then a block of statement is executed otherwise not.\nSyntax:\n if(condition)\n{\n//code\n}                Here, the condition after evaluation will be either true or false. C if statement accepts boolean values – if the value is true then it will execute the block of statements below it otherwise not. If we do not provide the curly braces and after if(condition) then by default if statement will consider the first immediately below statement to be inside its block.'},
     {title:'If-else in C',
    desc:'The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won’t. But what if we want to do something else if the condition is false. Here comes the C else statement. We can use the else statement with the if statement to execute a block of code when the condition is false. \nSyntax: \n if (condition)\n{\n // Executes this block if\n // condition is true\n}\nelse\n{\n// Executes this block if\n// condition is false\n}'},
     {title:'Nested-if in C',
    desc:'A nested if in C is an if statement that is the target of another if statement. Nested if statements mean an if statement inside another if statement. Yes, both C and C++ allow us to nested if statements within if statements, i.e, we can place an if statement inside another if statement. \n Syntax: \nif (condition1) \n{\n// Executes when condition1 is true\nif (condition2) \n{\n  // Executes when condition2 is true\n}\n}'},
     {title:' If-else-if ladder in C',
    desc:'Here, a user can decide among multiple options. The C if statements are executed from the top down. As soon as one of the conditions controlling the if is true, the statement associated with that if is executed, and the rest of the C else-if ladder is bypassed. If none of the conditions is true, then the final else statement will be executed. \nSyntax: \nif (condition)\n     statement;\nelse if (condition)\n    statement;\n.\n.\n.\nelse\n    statement;'},
     {title:'',
    desc:''},
]
 function Notes() {
  return (
    
        
        
        <FlatList
      data={dt}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
        return(
            
          <View style={styles.container}>
            <Text style={styles.qsn} >{item.title}</Text>
            <Text style={styles.ans} >{item.desc}</Text>
        
          </View>
          
        )
      }}
      />
  );
}


const styles=StyleSheet.create({
    qsn:{
        fontSize:30,
        color:"black",
        fontWeight:'bold',
    },
    ans:{
        fontSize: 21,
        color:'black',
        
    },
    container:{
        margin:20,
        padding:10,
        backgroundColor:"white",
        borderRadius:40,
    }
})