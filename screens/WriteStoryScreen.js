import React from 'react';
import{TextInput,View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import AppHeader from "../Components/AppHeader";

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
    }
render(){
    return(
        <View>
            <AppHeader/>
    <TextInput
    style={styles.inputBox}
    placeholder="TITLE OF THE STORY"
    />
    <TextInput
    style={styles.inputBox}
    placeholder="AUTHOR OF THE STORY"
    />
    <TextInput
    multiline={true}
    style={styles.inputBox2}
    placeholder="WRITE YOUR STORY HERE"
    />
    
    <TouchableOpacity>
    <Text style={styles.submitButtonText}>SUBMIT</Text>    
    </TouchableOpacity>
    </View>
    );
}
}

const styles=StyleSheet.create({
    inputBox:{
        width:330,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
        marginTop:50
    },
    inputBox2:{
        width:330,
        height:150,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20,
        marginTop:50
    },
    submitButtonText:{
         height:30,
         width:90,
         borderWidth:1,
         marginTop:40,
         marginLeft:100,
         paddingTop:5,
         borderRadius:7,
         textAlign:'center',
         backgroundColor:'lightblue',
         fontWeight:'BOLD'
      } 
});