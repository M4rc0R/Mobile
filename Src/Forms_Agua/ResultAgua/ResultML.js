import React from "react"
import { Text, View, TouchableOpacity, Share, StyleSheet } from 'react-native';

export default function ResultML(props) {

const onShare = async () => 
{
  const result = await Share.share
  ({
      message: "Você deve tomar: " +props.resulML,
    })
}


    return (
      <View style={styles.resulML}>

        <View style={styles.BoxShareButton}>
         
        <Text style={styles.informatio}>{props.messageResultML}</Text>
        <Text style={styles.numberImc}>{props.resulML}</Text>

          <TouchableOpacity 
          style={styles.Shared}
          onPress = {onShare}
          >
            <Text style={styles.SharedText}>Share</Text>
          </TouchableOpacity>
        
        </View>
       
     
           
  
      </View>
    );
  }

const styles = StyleSheet.create(
    {
        resulML:
        {
            flex:1,
            borderRadius:50,
            alignItems:"center",
            width:"100%",
            
        },
        informatio:
        {
            fontSize:18,
            color:"#fff8e8",
            fontWeight:"bold",
            top:-50,
        },
        numberImc:
        {
            fontSize:35,
            color:"#111",
            marginBottom:10,
            marginTop:10,
            top:-30,
        },

        BoxShareButton:
        {
            width:"100%",
            alignItems:"center",
            marginBottom:10,
        },
        Shared:
        {
            backgroundColor:"#02a9ea",
            borderRadius:10,
            padding:15,
        },
        SharedText:
        {
            color:"#fff",
            fontWeight:"bold",
            paddingHorizontal:30,
            fontSize:20,
        }
    });
