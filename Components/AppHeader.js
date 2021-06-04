import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AppHeader extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>STORY HUB</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'lightblue',
     borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7
    },
    text:{
        color:'black',
        fontSize:30,
        padding:20,
        fontWeight:'BOLD',
        textAlign:"center"

    }
});

export default AppHeader