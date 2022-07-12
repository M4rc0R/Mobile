import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {

    return (
        <View style={styles.MainContainer}>
            <Text style={styles.Logo}>Health.You</Text>

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
        fontSize:48,
        marginBottom:35,
        fontWeight:'bold',
        color:"#246eb9",
        top:-50,
    },
    DialogoContainer:
    {
        backgroundColor:"#f06543",
        padding:20,
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
        backgroundColor:'#4cb944',
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