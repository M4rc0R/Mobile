import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Menu({navigation}) {

    return (
        <View style={styles.MenuContainer}>

            <View style={styles.MenuDialogo}>
                <Text style={styles.MenuDialogoTitulo}>Vamos começar?</Text>
                <Text style={styles.MenuDialogoTexto}>Selecione uma das opções abaixo para calcular, dentro de cada sessão contém um diálogo explicando como funcionam
                os respectivos calculos.</Text>
            </View>
            
                   <TouchableOpacity 
                   style={styles.botaumAgua}
                    onPress={() => navigation.navigate('Agua')}>

                        <Text style={styles.Textobotaum}>Água</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                   style={styles.botaumIMC}
                    onPress={() => navigation.navigate('Imc')}>

                        <Text style={styles.Textobotaum}>IMC</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                   style={styles.botaumCalorias}
                    onPress={() => navigation.navigate('Calorias')}>

                        <Text style={styles.Textobotaum}>Carbidrato</Text>
                    </TouchableOpacity>  
        </View>
    );
}

const styles = StyleSheet.create
({
    MenuContainer:
    {
     alignItems: 'center',
     justifyContent:'center',
     height:'100%',
     backgroundColor:'#fbfbff',
    },

    MenuDialogo:
    {
        backgroundColor:'#37371f',
        textAlign:'center',
        alignItems:'center',
        padding:20,
        borderRadius:8,
        top:-30,
        marginLeft:10,
        marginRight:10,
    },
    MenuDialogoTitulo:
    {
        color:'#fff',
        fontSize:26,
        fontWeight:'bold',
        fontStyle:'italic',
        marginBottom:10,
    },
    MenuDialogoTexto:
    {
        color:'#fff',
        fontSize:18,
        lineHeight:30,
        fontStyle:'italic',
    },
    
    Textobotaum:
    {
        fontWeight:'bold',
        textTransform:'uppercase',
        color:"#fbfbff",
        fontSize:20,
    },
    botaumAgua:
    {
        fontWeight:'bold',
        fontSize:20,
        backgroundColor:'#0b4f6c',
        padding:50,
        paddingHorizontal:67,
        margin:20,
        borderRadius:10,
    },
    botaumIMC:
    {
        fontWeight:'bold',
        fontSize:20,
        backgroundColor:'#b80c09',
        padding:50,
        paddingHorizontal:75,
        margin:20,
        borderRadius:10,
    },
    botaumCalorias:
    {
        fontWeight:'bold',
        fontSize:20,
        backgroundColor:'#ea9010',
        padding:40,
        margin:20,
        borderRadius:10,
        paddingVertical:50,
    },

});