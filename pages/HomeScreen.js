import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  TouchableOpacity,
  StyleSheet,View,Text,Image,Dimensions,Animated
} from 'react-native';
const {width,height}=Dimensions.get('screen');
const data=[
  {src:"https://img.icons8.com/color/480/c-programming.png",title:'Clanguage'},
  {src:"https://freepngimg.com/save/14704-python-logo-free-download-png/286*364" ,title:'Python'},
  {src:"http://www.snti.in/images/ds-card.png" ,title:'DataStructures'}

];
const imageW=width*0.7;
const imageH=imageW*1.54;

const HomeScreen=({navigation})=>{
   const on_click=(item)=>{
    let title=item;
    if(title == 'Clanguage')
  {
    navigation.navigate("Topics")
  }
  else if(title == 'DataStructures')
  {
    navigation.navigate("DataStructures")
  }
  
  else if(title == 'Python')
  {
    navigation.navigate("PythonTopics")
  }
  
   }
  const scrollX=React.useRef(new Animated.Value(0)).current;
  return(
    <View style={{
      flex:1,
      backgroundColor:'black',

    }}>
      <View
          style={StyleSheet.absoluteFillObject}
      >
        {data.map((image,index)=>{
          const inputRange=[
            (index-1)*width,
            index*width,
            (index+1)*width
          ]
          const opacity=scrollX.interpolate({
            inputRange,
            outputRange:[0,1,0]
          })
          return <Animated.Image
          key={`image-${index}`}
          source={{uri:image.src}}
          style={[
            StyleSheet.absoluteFillObject,
            {
              opacity
            }
          ]}
          blurRadius={50}
          />
        }
        )}
      </View>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.img1}
        source={require('../assets/logo.png')}
        />
        <Image style={styles.img2}
        source={require('../assets/welogo.png')}
        />
        


      </View>
      <Animated.FlatList
      data={data}
      keyExtractor={(_,index)=>index.toString()}
      onScroll={Animated.event(
      [{nativeEvent:{contentOffset:{x:scrollX}}}],
      {useNativeDriver: true}
      
      )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return<View style={{
          width,justifyContent:'center',
          alignItems:'center',
          
          }}>
         <View>

        <TouchableOpacity onPress={()=> on_click(item.title)}>
          <Image
          source={{uri:item.src}} style={{
            width:imageW,
            height:imageH,
            resizeMode:'cover',
            borderRadius: 20,
            shadowColor:'black',
          shadowOpacity:4,
          shadowOffset:{
            width:20,
            height:20,
          },
          shadowRadius:20,
           

          }}
        
          />
          </TouchableOpacity>
            <View style={styles.title} >
              
                <Text style={{position:'absolute',fontSize:21,color:'white'}}>{item.title}</Text>
                
</View>
    
          </View>
          
        </View>
        
      }}
      />
      
    </View>
  )
  
}
export default HomeScreen
const styles=StyleSheet.create({
  title:{
    
    alignItems:'center',
    color:'white',
    marginHorizontal: 50,
    marginTop: 5,
    fontSize:20,
    
  },
  img1:{
    width:65,
    height:65,
    marginRight:"4%",
    marginTop:25.5,
    marginLeft:'3%'
  
  },
  img2:{
    width:190,
    height:70,
    marginTop:21,
    marginLeft:'6%'

  }
})