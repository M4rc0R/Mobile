import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Form from './Forms_IMC/forms'


export default function Imc() {

    return (
        <View style={styles.AguaContainer}>
            <View style={styles.InfoContainer}>
                <Text style={styles.Titulo}>O que é Índice de massa corporal?</Text>
                <Text style={styles.Texto}>O IMC é um cálculo simples que permite avaliar se a pessoa está dentro do peso que é considerado ideal 
                para a sua altura. Também conhecido como Índice de Massa Corporal, o IMC é uma fórmula utilizada por vários 
                profissionais de saúde, incluindo médicos, enfermeiros e nutricionistas, para saber, de uma forma rápida, 
                se a pessoa precisa ganhar ou perder peso.</Text>
            </View>
<Form></Form>

        </View>
    );
}

const styles = StyleSheet.create
({
    AguaContainer:
    {
        height:"100%",
        backgroundColor:'#f6f7eb',
    },
    InfoContainer:
    {
        marginTop:20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#e94f37',
        padding:20,
        borderRadius: 10,
        lineHeight:40,
    },
    Titulo:
    {
        fontSize:20,
        color:'#cbf7ed',
        marginBottom:15,
        fontWeight:'bold',
    },
    Texto:
    {
        fontSize:17,
        color:'#cbf7ed',
        lineHeight:26,
    }
})
