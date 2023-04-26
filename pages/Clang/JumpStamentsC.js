import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView, Button, TouchableOpacity,Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
const {w,h}=Dimensions.get("screen");
const vidW=w-50;
function Videos(){

return(
       <SafeAreaView style={{flex:1,marginHorizontal:10}}>
        <ScrollView>
              <View style={{marginVertical:'10%',justifyContent:'center'}}>
                <YoutubePlayer
                height={200}
                width={350}
                videoId={'obJcPlAtGVM'}/>
               
        
              </View>
              <View style={{marginVertical:'10%',justifyContent:'center',}}>
              <YoutubePlayer
              height={200}
              width={350}
              videoId={'Vg0R2UeYMkw'}/>

      
            </View>
              
            </ScrollView>
        </SafeAreaView>
          
        
)
}

export default function JumpStatementsC() {
    
    const [scrn,setScrn]=useState()
    const updateN=()=>{
            setScrn("Notes")
        
    }
    const updateV=()=>{
            setScrn("Videos")
        
    }
    return(
        <SafeAreaView style={{flex:1,position:'absolute'}}>
        <View style={{justifyContent:'center' ,alignItems:'center',marginTop:80,flexDirection:'row'}}>
            <TouchableOpacity onPress={updateN}>
            <View style={{padding:10,backgroundColor:'skyblue',borderRadius:30,marginHorizontal:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,}}>Notes</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={updateV}>
             <View style={{padding:10,backgroundColor:'skyblue',borderRadius:30,marginHorizontal:5}}>
            <Text style={{fontWeight:'bold',fontSize:20,}}>Vedios</Text>
            </View>
            </TouchableOpacity>
            <View>
            </View>
        </View>
            {(scrn==="Notes")&&(<Notes/>)}
        {(scrn==="Videos")&&(<Videos/>)}
        </SafeAreaView>
        
    )
}
const dt=[
    {title:'  Break',
     desc:' This loop control statement is used to terminate the loop. As soon as the break statement is encountered from within a loop, the loop iterations stop there, and control returns from the loop immediately to the first statement after the loop. \nSyntax: \nbreak;\nBasically, break statements are used in situations when we are not sure about the actual number of iterations for the loop or we want to terminate the loop based on some condition.'},
     {title:'Continue',
    desc:'The if statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won’t. But what if we want to do something else if the condition is false. Here comes the C else statement. We can use the else statement with the if statement to execute a block of code when the condition is false. \nSyntax: \n if (condition)\n{\n // Executes this block if\n // condition is true\n}\nelse\n{\n// Executes this block if\n// condition is false\n}'},
    {title:'goto ',
   desc:'The goto statement in C/C++ also referred to as the unconditional jump statement can be used to jump from one point to another within a function. \nSyntax: \nSyntax1      |   Syntax2\n----------------------------\ngoto label;  |    label:  \n.            |    .\n.            |    .\n.            |    .\nlabel:       |    goto label;\nIn the above syntax, the first line tells the compiler to go to or jump to the statement marked as a label. Here, a label is a user-defined identifier that indicates the target statement. The statement immediately followed after ‘label:’ is the destination statement. The ‘label:’ can also appear before the ‘goto label;’ statement in the above syntax.'},
     {title:'return',
    desc:'The return in C or C++ returns the flow of the execution to the function from where it is called. This statement does not mandatorily need any conditional statements. As soon as the statement is executed, the flow of the program stops immediately and returns the control from where it was called. The return statement may or may not return anything for a void function, but for a non-void function, a return value must be returned. \nSyntax: \nreturn[expression];'},
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
        color:'rgba(15, 150, 300, 300)',
        
    },
    container:{
        margin:20,
        padding:10,
        backgroundColor:"white",
        borderRadius:40,
    }
})