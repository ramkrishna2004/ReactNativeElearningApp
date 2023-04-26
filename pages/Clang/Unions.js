import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
export default function UnionsC() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <View style={{marginTop:30,marginHorizontal:10}} >
            <YoutubePlayer
            height={200}
            videoId={'puXps4LuCVA'}/>
  
     </View>
        <ScrollView>
      <View style={styles.container}>
        
            <Text style={styles.qsn}>  What is C?</Text>
        <Text style={styles.ans} >
C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.

It is a very popular language, despite being old.

C is strongly associated with UNIX, as it was developed to write the UNIX operating system.
</Text>
<Text style={styles.qsn}>  Why Learn C?</Text>
        <Text style={styles.ans} >

It is one of the most popular programming language in the world
If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar
C is very fast, compared to other programming languages, like Java and Python
C is very versatile; it can be used in both applications and technologies
</Text>
<Text style={styles.qsn}> History of C</Text>
<Text style={styles.ans}> 
C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. It has found lasting use in operating systems, device drivers, protocol stacks, though decreasingly for application software. C is commonly used on computer architectures that range from the largest supercomputers to the smallest microcontrollers and embedded systems.

A successor to the programming language B, C was originally developed at Bell Labs by Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system.During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages, with C compilers available for practically all modern computer architectures and operating systems. C has been standardized by ANSI since 1989 (ANSI C) and by the International Organization for Standardization (ISO).

C is an imperative procedural language, supporting structured programming, lexical variable scope and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.

Since 2000, C has consistently ranked among the top two languages in the TIOBE index, a measure of the popularity of programming languages


          </Text>
         
    
        </View>
        </ScrollView>
      
      
    </SafeAreaView>
  );
}


const styles=StyleSheet.create({
    qsn:{
        fontSize:30,
        color:"black",
        fontWeight:'bold',
    },
    ans:{
        fontSize: 20,
        color:'rgba(15, 150, 300, 300)',
        
    },
    container:{
        margin:20,
        padding:10,
        backgroundColor:"white",
        borderRadius:40,
    }
})