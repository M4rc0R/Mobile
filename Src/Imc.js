import React, {useState} from "react"
import {Text, View, Button, StyleSheet, Modal, Alert, Pressable, Image} from 'react-native';
import Form from './Forms_IMC/forms'


export default function Imc() {

const [modalVisit, setModdalVisit] = useState(false)

    return (
        <View style={styles.ContainerPrincipal}>

            <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisit}
            onRequestClose=
            {
                () => {Alert.alert("Modal está oculto");
                    setModdalVisit(!modalVisit);
            }}
            >
                <View style={styles.ContainerSecundario}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.TextoModal}>
                        O IMC é reconhecido como padrão internacional para avaliar o
                         grau de sobrepeso e obesidade. É calculado 
                        dividindo o peso (em kg) pela altura ao quadrado (em metros).
                        </Text>

                        <Text style={styles.TituloTabela}>
                        Tabela de Resultados
                        </Text>
                        
                        <Text style={styles.TextoTabela}>
                        Menor do que 18,5 = Abaixo do peso
                        </Text>

                        <Text style={styles.TextoTabela}>
                        Entre 18,5 e 24,9 =  Peso normal
                        </Text>

                        <Text style={styles.TextoTabela}>
                        Entre 25 e 29,9 = Acima do peso (sobrepeso)
                        </Text>

                        <Text style={styles.TextoTabela}>
                        Entre 30 e 34,9 = Obesidade I
                        </Text>

                        <Text style={styles.TextoTabela}>
                        Entre 35 e 39,9 = Obesidade II
                        </Text>

                        <Text style={styles.TextoTabela}>
                        Maior do que 40 = Obesidade III
                        </Text>

                        <Pressable
                        style={[styles.button, styles.botaoFechar]}
                        onPress={() => setModdalVisit(!modalVisit)}
                        >
                        <Text style={styles.TextoFechar}>Continuar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
            style={[styles.button, styles.botaoAbrir]}
            onPress={() => setModdalVisit(true)}
            >
                <Text style={styles.TextoAbrir}>Como funciona o IMC?</Text>
            </Pressable>
            
<Form></Form>

        </View>
    );
}

const styles = StyleSheet.create
({
    ContainerPrincipal:
    {
        flex: 1,
        justifyContent:"center",
        backgroundColor:"#fff",
        alignItems:"center",
    },

    ContainerSecundario:
    {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:"70%",
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        backgroundColor:"#edf2f4",
    },

    modalContainer:
    {
        margin: 20,
        backgroundColor:"#cfd6ea",
        borderRadius: 20,
        padding: 20,
        height:"90%",
        width:"90%",
        alignItems: "center",
    },
    
    botaoFechar:
    {
        backgroundColor: "#4d7ea8",
        padding:20,
        marginTop:30,
        paddingVertical:25,
        paddingHorizontal:30,
    },

    botaoAbrir:
    {
        backgroundColor: "#272932",
        padding:20,
        marginTop:45,
        color:"#fff",
        borderRadius:6,
    },

    TextoAbrir:
    {
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },

    botaoFechar:
    {
        backgroundColor: "#272932",
        padding:20,
        marginTop:40,
        color:"#fff",
        borderRadius:6,
    },

    TextoFechar:
    {
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },

    button: {
        borderRadius: 20,
        padding: 10,
      },

      TextoModal:
      {
        textAlign:"left",
        lineHeight:32,
        fontSize:20,
        marginBottom:20,
        color:"#111",
      },

      TextoTabela:
      {
        textAlign:"left",
        alignItems:"flex-start",
        fontSize:15,
        lineHeight:30,
      },
      TituloTabela:
      {
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
      }

})
