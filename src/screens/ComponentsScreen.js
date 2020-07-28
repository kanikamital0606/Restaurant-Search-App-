/*******************************************Step 1 Create component  *********************************************************/
// create react component
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//create function ComponentScreen 
//const ComponentScreen = function(){}; 
//const ComponentScreen = () => {}; 

/************************************************ Step 2 make function to return on Screen just like html here jsx returning TEXT ******************/
const ComponentScreen = () => {
    return <Text style={styles.textStyle} >This is the Component Screen</Text>
}; 

/***************************************************Step 3 ADD CSS **********************************************/
//Create object textStyle and function style
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30;
    }
});

/**************************************************Step 4 export **************************************************/
export default ComponentScreen;