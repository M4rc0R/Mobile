import React, { useState } from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, Modal, Alert, Pressable} from 'react-native';

export default function Calorias({navigation}) {


    return (
        <View style={styles.AguaContainer}>
            <View style={styles.InfoContainer}>
                <Text style={styles.Texto}>Para iniciarmos o calculo primero você deve escolher abaixo a opção em que mais se assemelha ao seu objetivo</Text>
            </View>
           <TouchableOpacity  style={styles.botaumPP}
                    onPress={() => navigation.navigate('Calculo1')}>
            <Text>Perder peso</Text>
           </TouchableOpacity>

           <TouchableOpacity  style={styles.botaumGP}
                    onPress={() => navigation.navigate('Calculo2')}>
            <Text>Ganhar peso</Text>
           </TouchableOpacity>

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
    },
    botaumPP:
    {
        alignItems:'center',
        marginTop:50,
        marginBottom:50,
        backgroundColor:'#FFF',
        padding: 20,
        marginLeft:60,
        marginRight:60,
        borderRadius:10,
    },
    botaumGP:
    {
        alignItems:'center',
        marginTop:50,
        marginBottom:50,
        backgroundColor:'#FFF',
        padding: 20,
        marginLeft:60,
        marginRight:60,
        borderRadius:10,
    },    
})
