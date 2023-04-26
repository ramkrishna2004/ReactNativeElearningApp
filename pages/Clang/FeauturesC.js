import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const FeauturesC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <View style={{marginTop:30,marginHorizontal:10}} >
            <YoutubePlayer
            height={200}
            videoId={'rLf3jnHxSmU'}/>
  
     </View>
        <ScrollView>
      <View style={styles.container}>
        
        
            <Text style={styles.qsn}>Procedural Language:
             <Text style={styles.ans}>
             In a procedural language like C step by step predefined instructions are carried out. C program may contain more than one function to perform a particular task. New people to programming will think that this is the only way a particular programming language works. There are other programming paradigms as well in the programming world. Most of the commonly used paradigm is an object-oriented programming language. 
             </Text> 
             </Text> 
             <Text style={styles.qsn}>Fast and Efficient:</Text>
             <Text style={styles.ans}>
 Newer languages like java, python offer more features than c programming language but due to additional processing in these languages, their performance rate gets down effectively. C programming language as the been middle-level language provides programmers access to direct manipulation with the computer hardware but higher-level languages do not allow this. That’s one of the reasons C language is considered the first choice to start learning programming languages. It’s fast because statically typed languages are faster than dynamically typed languages. 
 </Text>
 <Text style={styles.qsn}>Modularity:</Text>
             <Text style={styles.ans}>
 The concept of storing C programming language code in the form of libraries for further future uses is known as modularity. This programming language van does very little on its own most of its power is held by its libraries. C language has its own library to solve common problems like in this we can use a particular function by using a header file stored in its library. 
</Text>
<Text style={styles.qsn}>Statically Type:</Text>
             <Text style={styles.ans}>
 C programming language is a statically typed language. Meaning the type of variable is checked at the time of compilation but not at run time. This means each time a programmer type a program they have to mention the type of variables used. 
</Text>
 
<Text style={styles.qsn}>General Purpose Language:</Text>
             <Text style={styles.ans}>
 From system programming to photo editing software, the C programming language is used in various applications. Some of the common applications where it’s used are as follows: 
Operating systems: Windows, Linux, iOS, Android, OXS
Databases: PostgreSQL, Oracle, MySQL, MS SQL Server etc.
Rich set of built-in Operators: It is a diversified language with a rich set of built-in operators which are used in writing complex or simplified C programs. 
</Text>
<Text style={styles.qsn}>Libraries with rich Functions:</Text>
             <Text style={styles.ans}>

 Robust libraries and functions in C help even a beginner coder to code with ease.
</Text> 
<Text style={styles.qsn}>Middle-Level Language:</Text>
             <Text style={styles.ans}>

 As it is a middle-level language so it has the combined form of both capabilities of assembly language and features of the high-level language. 
 </Text>
<Text style={styles.qsn}>
Portability:</Text>
             <Text style={styles.ans}>
 C language is lavishly portable as programs that are written in C language can run and compile on any system with either none or small changes. 
</Text>
<Text style={styles.qsn}>Easy to Extend:</Text>
             <Text style={styles.ans}>

 Programs written in C language can be extended means when a program is already written in it then some more features and operations can be added to it. 
 
</Text>
        
        </View>
        </ScrollView>
      
      
    </SafeAreaView>
  );
}
export default FeauturesC;

const styles=StyleSheet.create({
    qsn:{
        fontSize:30,
        color:"black",
        fontWeight:'bold',
    },
    ans:{
        fontSize: 20,
        
    },
    container:{
        margin:20,
        padding:10,
        backgroundColor:"gainsboro",
        borderRadius:40,
    }
})