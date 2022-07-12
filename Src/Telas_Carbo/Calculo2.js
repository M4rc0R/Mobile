import React, { useState } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Forms1 from '../Forms_Calorias/Forms1'

export default function Calculo1({navigation}) {


    return (
        <View style={styles.AguaContainer}>
            <View style={styles.InfoContainer}>
                <Text style={styles.Titulo}>Calculo para perda de peso</Text>
                <Text style={styles.Texto}>O calculo para perda de peso é feito da seguinte maneira:
                Seu peso x 30
                O resultado desta equação é o valor de carboidrato que deve ser consumido.
                </Text>
            </View>
           
        <Forms1></Forms1>

        </View>
    );
}

const styles = StyleSheet.create
({
    AguaContainer:
    {
        height:"100%",
        backgroundColor:'#f5dfbb',
    },
    InfoContainer:
    {
        marginTop:40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#f2542d',
        padding:20,
        borderRadius: 10,
        lineHeight:40,
    },
    Titulo:
    {
        fontSize:20,
        color:'#fff',
        marginBottom:15,
        fontWeight:'bold',
    },
    Texto:
    {
        fontSize:17,
        color:'#fff',
        lineHeight:26,
    }
})
