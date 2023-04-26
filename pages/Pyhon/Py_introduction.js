import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView} from 'react-native';

const Py_Introduction = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
<Text style={styles.qsn}> Difference between C and C++ </Text>
        <Text style={styles.ans} >

C++ was developed as an extension of C, and both languages have almost the same syntax
The main difference between C and C++ is that C++ support classes and objects, while C does not
Get Started
This tutorial will teach you the very basics of C.

It is not necessary to have any prior programming experience.


          </Text>
          <View style={styles.container}>
  
     </View>

        </View>
        </ScrollView>
      
    </SafeAreaView>
  );
}
export default Py_Introduction;

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