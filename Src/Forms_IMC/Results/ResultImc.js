import React from "react"
import { Text, View, TouchableOpacity, Share, StyleSheet } from 'react-native';

export default function ResultImc(props) {

const onShare = async () => 
{
  const result = await Share.share
  ({
      message: "Meu imc hoje é: " +props.resultImc,
    })
}


    return (
      <View style={styles.resultImc}>

        <View style={styles.BoxShareButton}>
         
        <Text style={styles.informatio}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>

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
        resultImc:
        {
            flex:1,
            marginTop:15,
            paddingTop:60,
            borderRadius:50,
            alignItems:"center",
            width:"100%",
            
        },
        informatio:
        {
            fontSize:18,
            color:"#111",
            fontWeight:"bold",
        },
        numberImc:
        {
            fontSize:48,
            color:"#111",
            fontWeight:"bold",
        },

        BoxShareButton:
        {
            width:"100%",
            alignItems:"center",
            marginBottom:20,
            top:-50,
        },
        Shared:
        {
            backgroundColor:"#02a9ea",
            borderRadius:50,
            paddingBottom:10,
            paddingTop:10,
            padding:10,
        },
        SharedText:
        {
            color:"#fff",
            fontWeight:"bold",
            paddingHorizontal:30,
        }
    });
