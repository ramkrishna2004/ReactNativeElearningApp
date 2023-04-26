import * as React from 'react';
import { View, Text, SafeAreaView,StyleSheet,ScrollView, Button, TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const {w,h}=Dimensions.get("screen");
function Videos(){
  
return(
  
        <ScrollView>
       
            <SafeAreaView style={{flex:1,marginBottom:150}}>
            <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%",marginHorizontal:'2%',borderBottomLeftRadius:20}}>
            <YoutubePlayer
              height={200}
              width={w}
              videoId={'lMv8vIqpUsY'}/>
            <Text style={{fontWeight:'bold',fontSize:30}}>Logical operators</Text>
            
            </View>
            <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%"}}>
                <YoutubePlayer
                height={200}
                width={w}
                videoId={'WGQRInmOBM8'}/>
            <Text style={{fontWeight:'bold',fontSize:30}}>Arithmetic operators</Text>
              </View>
              <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%",marginHorizontal:'2%',borderBottomLeftRadius:20}}>
              <YoutubePlayer
              height={200}
              width={w}
              videoId={'E1_Gg6dURwk'}/>
            <Text style={{fontWeight:'bold',fontSize:30}}>Unary,Binary,Terinary operators</Text>
            </View>
            <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%",marginHorizontal:'2%',borderBottomLeftRadius:20}}>
              <YoutubePlayer
              height={200}
              width={w}
              videoId={'jlQmeyce65Q'}/>

            <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%",marginHorizontal:'2%',borderBottomLeftRadius:20}}>
              <YoutubePlayer
              height={200}
              width={w}
              videoId={'8aFik6lPPaA'}/>

      
            </View>
            <Text style={{fontWeight:'bold',fontSize:30}}>Bitwise operators</Text>
            </View>
            <View style={{marginVertical:'10%',justifyContent:'center',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4,padding:"1%",borderBottomLeftRadius:20}}>
              <YoutubePlayer
              height={200}
              width={w}
              videoId={'mhmnb80ZDBM'}/>
         <Text style={{fontWeight:'bold',fontSize:30}}>Coma operators</Text>
            </View>
            <View style={{marginVertical:'10%',backgroundColor:'gainsboro',borderColor:'black',borderWidth:.4}}>
              <YoutubePlayer
              height={200}
              width={w}
              videoId={'8H9G621pQq0'}/>
         <Text style={{fontWeight:'bold',fontSize:30}}>Operators precedende</Text>
            </View>
            </SafeAreaView>
            </ScrollView>
        
)
}

export default function OperatorsC() {
    
    const [scrn,setScrn]=useState()
    const updateN=()=>{
            setScrn("Notes")
        
    }
    const updateV=()=>{
            setScrn("Videos")
        
    }
    return(
        <View>
        <View style={{justifyContent:'center' ,marginTop:8,flexDirection:'row',}}>
          <ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELfJ0nhAIXLda2hdfX_IEA0rKLQirJ1LUp6bDtFYEGJ_xTLqVPf1vfPUv-xwhaLz-lys&usqp=CAU"}}>
            <TouchableOpacity onPress={updateN}>

            <View style={{padding:10,marginHorizontal:20}}>
            <Text style={{fontWeight:'bold',fontSize:20,}}>Notes</Text>
            </View>
            </TouchableOpacity>
            </ImageBackground>
          <ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELfJ0nhAIXLda2hdfX_IEA0rKLQirJ1LUp6bDtFYEGJ_xTLqVPf1vfPUv-xwhaLz-lys&usqp=CAU"}}>
             <TouchableOpacity onPress={updateV}>
             <View style={{padding:10,marginHorizontal:18}}>
            <Text style={{fontWeight:'bold',fontSize:20,}}>Videos</Text>
            </View>
            </TouchableOpacity>
            </ImageBackground>
            <View>
            </View>
        </View>
            {(scrn==="Notes")&&(<Notes/>)}
        {(scrn==="Videos")&&(<Videos/>)}
        </View>
        
    )
}

function Notes() {
    const dt=[
        {title:'Oprators"',
         desc:' Operators are the foundation of any programming language. We can define operators as symbols that help us to perform specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands.'},
         {title:'1. Arithmetic Operators:',
        desc:'These operators are used to perform arithmetic/mathematical operations on operands. Examples: (+, -, *, /, %,++,–). Arithmetic operators are of two types:\n\n a)Unary oerators\nOperators that operate or work with a single operand are unary operators. For example: Increment(++) and Decrement(–) Operators\n\nb) Binary Operators:\nOperators that operate or work with two operands are binary operators. For example: Addition(+), Subtraction(-), multiplication(*), Division(/) operators'},
        {title:'2. Relational Operators: ',
       desc:'These are used for the comparison of the values of two operands. For example, checking if one operand is equal to the other operand or not, whether an operand is greater than the other operand or not, etc. Some of the relational operators are (==, >= , <= )\n\nEqual to operator: Represented as ‘==’, the equal to operator checks whether the two given operands are equal or not. If so, it returns true. Otherwise, it returns false. For example, 5==5 will return true \n\nNot equal to operator: Represented as ‘!=’, the not equal to operator checks whether the two given operands are equal or not. If not, it returns true. Otherwise, it returns false. It is the exact boolean complement of the ‘==’ operator. For example, 5!=5 will return false\n\nGreater than operator: Represented as ‘>’, the greater than operator checks whether the first operand is greater than the second operand or not. If so, it returns true. Otherwise, it returns false. For example, 6>5 will return true\n\nLess than operator: Represented as ‘<‘, the less than operator checks whether the first operand is lesser than the second operand. If so, it returns true. Otherwise, it returns false. For example, 6<5 will return false.\n\nGreater than or equal to operator: Represented as ‘>=’, the greater than or equal to operator checks whether the first operand is greater than or equal to the second operand. If so, it returns true else it returns false. For example, 5>=5 will return true.\n\nLess than or equal to operator: Represented as ‘<=’, the less than or equal to operator checks whether the first operand is less than or equal to the second operand. If so, it returns true else false. For example, 5<=5 will also return true'},
       
       {title:'3. Logical Operators:',
        desc:'Logical Operators are used to combine two or more conditions/constraints or to complement the evaluation of the original condition in consideration. The result of the operation of a logical operator is a Boolean value either true or false. \n\n 1.Logical and :  The logical AND represented as the ‘&&’ operator in C returns true when both the conditions under consideration are satisfied. Otherwise, it returns false. Therefore, a && b returns true when both a and b are true (i.e. non-zero)\n\n2.Logical OR:The condition becomes true if any one of them is non-zero. Otherwise, it returns false i.e, 0 as the value. Below is the truth table for the logical OR operator.\n\n3.Logcial NOT:If the condition is true then the logical NOT operator will make it false and vice-versa. Below is the truth table for the logical NOT operator\n\n4.Logcal XOR:If both bits are the same then it will return false otherwise true. Below is the truth table for the logical XOR operator'},
         
        {title:'4.Bitwise Operators',
        desc:'1.The & (bitwise AND) in C takes two numbers as operands and does AND on every bit of two numbers. The result of AND is 1 only if both bits are 1. \n\n2.The | (bitwise OR) in C  takes two numbers as operands and does OR on every bit of two numbers. The result of OR is 1 if any of the two bits is 1. \n\n3.The ^ (bitwise XOR) in C takes two numbers as operands and does XOR on every bit of two numbers. The result of XOR is 1 if the two bits are different. \n\n4.The << (left shift) in C or C++ takes two numbers, left shifts the bits of the first operand, the second operand decides the number of places to shift.\n\n5.The >> (right shift) in C takes two numbers, right shifts the bits of the first operand, the second operand decides the number of places to shift.\n\nThe ~ (bitwise NOT) in C takes one number and inverts all bits of it.'},
        {title:'5.Assingnment operators',
        desc:'Assignment operators are used to assign value to a variable. The left side operand of the assignment operator is a variable and the right side operand of the assignment operator is a value. The value on the right side must be of the same data type as the variable on the left side otherwise the compiler will raise an error.'},
        {title:'6.Other Operators',
        desc:'Apart from the above operators, there are some other operators available in C used to perform some specific tasks\na. sizeof operator\nb.Comma Operator\nc. Conditional Operator:Expression1? Expression2: Expression3\nHere, Expression1 is the condition to be evaluated. If the condition(Expression1) is True then we will execute and return the result of Expression2 otherwise if the condition(Expression1) is false then we will execute and return the result of Expression3.\nd. dot (.) and arrow (->) Operators\nMember operators are used to reference individual members of classes, structures, and unions.\nThe dot operator is applied to the actual object. (See this article for reference\nThe arrow operator is used with a pointer to an object. (See this article for reference)'},
    ]
    return (
    
        
        
        <FlatList
      data={dt}
      showsVerticalScrollIndicator={false}
      style={{marginBottom:100}}
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
        
        
    },
    container:{
        margin:10,
        padding:10,
        backgroundColor:"white",
        borderRadius:40,
        borderColor:'black',
        borderWidth:1,
        marginBottom:50
    }
})