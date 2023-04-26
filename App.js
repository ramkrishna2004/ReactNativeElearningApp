import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import { View,Text,Image } from 'react-native';
import CTopics from './pages/CTopics';
import HistoryC from './pages/Clang/HistoryC';
import PythonTopics from './pages/PythonTopics';
import Py_Introduction from './pages/Pyhon/Py_introduction';
import DefaultTheme from '@react-navigation/native';
import DarkTheme from '@react-navigation/native';
import FeauturesC from './pages/Clang/FeauturesC';
import DsTopics from './pages/DsTopics';
import InterViewQC from './pages/Clang/InterViewQC';
import ConditionC from './pages/Clang/ConditionC';
import JumpStatementsC from './pages/Clang/JumpStamentsC';
import OperatorsC from './pages/Clang/OperatorsC';
import FunctionsC from './pages/Clang/FunctionsC';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer=createDrawerNavigator();

function HomeStack() {
  return (
    
    <Stack.Navigator>
      
        <Stack.Screen  name="HomeScreen"  options={{headerShown:false}}component={HomeScreen}/>
        <Stack.Screen name="Topics" options={{headerTransparent:true,headerTitle:"",headerTintColor:'white',}}component={CTopics}  />
        <Stack.Screen name="DataStructures"  options={{headerShown:false}}component={DsTopics} />
        <Stack.Screen name="HistoryC" options={{headerTitle:"History",headerStyle: {
            }}} component={HistoryC} />
        <Stack.Screen name="Feautures of C" options={{headerShown:false}} component={FeauturesC} />
        <Stack.Screen name="PythonTopics" options={{headerShown:false}} component={PythonTopics} />
        <Stack.Screen name="Py_Introduction" options={{headerShown:false}} component={Py_Introduction} />
        <Stack.Screen name="Cond_C" options={{headerShown:false}} component={ConditionC} />
        <Stack.Screen name="JumpStatements_C" options={{headerShown:false}} component={JumpStatementsC} />
        <Stack.Screen name="OperatorsC" options={{headerTitle:"Operators",
        headerBackground: () => (
            <Image
              source={{uri:"https://img.icons8.com/color/480/c-programming.png"}}
              style={{ height: '100%', width: '100%' }}
              blurRadius={50}
            />
          ),
            }} component={OperatorsC} />
        <Stack.Screen name="FunctionsC" options={{headerShown:false}} component={FunctionsC} />
        <Stack.Screen name="InterViewQC" options={{headerShown:false}} component={InterViewQC} />
        
      </Stack.Navigator>
     
  );
}

function About() {
  return (
<View>
  <Text style={{fontSize: 20}}>
    This application designed in such a way that all pdfs are in an organised way,
    that is subjict,Chapter,Topic,Theory ,pdfs and Vedios
  </Text>
</View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      
      <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" options={{headerShown:false}} component={HomeStack}/>
  <Drawer.Screen name="About" component={About} />
</Drawer.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

