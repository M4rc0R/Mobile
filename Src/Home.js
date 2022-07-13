import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Home({navigation}) {

    return (
        <View style={styles.MainContainer}>
           
           <Image 
           style={styles.Logo}
           source={require('./logo.png')}
           ></Image>

            <View style={styles.DialogoContainer}>
                <Text style={styles.Titulo}>Bem-Vindo ao Health.You</Text>
                <Text style={styles.Texto}>Neste aplicativo vamos mostrar a você a como mudar seu habitos ou melhora-los
                    através de alguns calculos!
                    No Health.You você descobrirá quantos litros de água de tomar por dia, qual o seu IMC
                    (Índice de massa corporal) e calcular quantas calorias deve consumir.
                </Text>
            </View>

                   <TouchableOpacity 
                   style={styles.botaum}
                    onPress={() => navigation.navigate('Menu')}>

                        <Text style={styles.Textobotaum}>Começar</Text>
                    </TouchableOpacity>  
        </View>
    );
}

const styles = StyleSheet.create
({
    MainContainer:
    {
     alignItems: 'center',
     justifyContent:'center',
     height:'100%',
     backgroundColor:'#fdfffc',
    },
    Logo:
    {
        top: -20,        
    },
    DialogoContainer:
    {
        backgroundColor:"#3cac6c",
        padding:10,
        marginLeft:15,
        marginRight:15,
        borderRadius:10,
        marginBottom:25,
    },
    Texto:
    {
        color:'#f0f4ef',
        fontSize:20,
        lineHeight:40,
    },
    Titulo:
    {
        color:"#f0f4ef",
        fontSize:22,
        marginBottom:10,
    },
    botaum:
    {
        backgroundColor:'#2caadc',
        padding:20,
        borderRadius:10,
    },
    Textobotaum:
    {
        fontWeight:'bold',
        fontSize:18,
        color:'#f0f4ef',
    }
});