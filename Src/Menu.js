import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

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
                        <Image style={styles.imagembotaumAgua}
                        source={require('./imagemagua.png')}
                        ></Image>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                   style={styles.botaumIMC}
                    onPress={() => navigation.navigate('Imc')}>

                    <Image style={styles.imagembotaumIMC}
                        source={require('./imagenimc.png')}
                        ></Image>
                    </TouchableOpacity>  

                    <TouchableOpacity 
                   style={styles.botaumCalorias}
                    onPress={() => navigation.navigate('Calorias')}>

                       <Image style={styles.imagembotaumCarbo}
                        source={require('./imagemKcal.png')}
                        ></Image>
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
        backgroundColor:'#5bb32c',
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
        backgroundColor:'#247ba0',
        padding:10,
        margin:20,
        borderRadius:10,
    },

    imagembotaumAgua:
    {
        width:100,
        height:100,
    },

    imagembotaumIMC:
    {
        width:100,
        height:100,
    },

    botaumIMC:
    {
        backgroundColor:'#a3320b',
        padding:13,
        margin:20,
        borderRadius:10,
    },
    botaumCalorias:
    {
        backgroundColor:'#001514',
        padding:13,
        margin:20,
        borderRadius:10,
    },
 
    imagembotaumCarbo:
    {
        width:100,
        height:100,
    },
});