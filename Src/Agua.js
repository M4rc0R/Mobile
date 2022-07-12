import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Form from './Forms_Agua/form'

export default function Agua() {

    return (
        <View style={styles.AguaContainer}>
            <View style={styles.InfoContainer}>
                <Text style={styles.Titulo}>Por é tão importante tomar água?</Text>
                <Text style={styles.Texto}>Regula a temperatura do corpo; 
                    Protege nossos órgãos vitais e os ajuda a absorver melhor os nutrientes; 
                    Ajuda nosso metabolismo; 
                    Protege e hidrata nossas articulações e células.</Text>

                <Text style={styles.Titulo}>Como o calculo é feito?</Text>
                <Text style={styles.Texto}>Na conta são considerados 35ml de água pelo peso corporal de cada pessoa. 
                Veja o exemplo a seguir: 
                72kg X 35ml = 2.520, ou seja, 2 litros e 520 ml /dia.</Text>
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
        backgroundColor:'#fffcff',
    },
    InfoContainer:
    {
        marginTop:10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'#247ba0',
        padding:20,
        borderRadius: 10,
        lineHeight:40,
    },
    Titulo:
    {
        fontSize:20,
        color:'#ffffff',
        marginBottom:15,
        fontWeight:'bold',
    },
    Texto:
    {
        fontSize:17,
        color:'#ffffff',
        lineHeight:26,
    }
})
