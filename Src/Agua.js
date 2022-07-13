import React, {useState} from "react"
import {Text, View, Button, StyleSheet, Modal, Alert, Pressable} from 'react-native';
import Form from './Forms_Agua/form'

export default function Agua() {

const [modalVisit, setModdalVisit] = useState(false)

    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisit}
          onRequestClose={() => {
            Alert.alert("Modal está oculto.");
            setModdalVisit(!modalVisit);
          }}
        >
          <View style={styles.centeredView2}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Nutricionistas afirmam que, com um simples cálculo ajuda a regular a 
              quantidade de água necessária para o funcionamento do corpo. 
              Na conta são considerados 35ml de água pelo peso corporal de cada pessoa. 
              Veja o exemplo a seguir: 72kg X 35ml = 2.520, ou seja, 2 litros e 520 ml /dia.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModdalVisit(!modalVisit)}
              >
                <Text style={styles.textStyle}>Entendi!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModdalVisit(true)}
        >
          <Text style={styles.textStyle}>Como o calculo da água funciona?</Text>
        </Pressable>
      

<Form></Form>

        </View>
    );
}

const styles = StyleSheet.create
({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff",
      },

      centeredView2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:"70%",
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        backgroundColor:"#edf2f4",
      },

      modalView: {
        margin: 20,
        backgroundColor:"#cfd6ea",
        borderRadius: 20,
        padding: 20,
        height:"90%",
        width:"90%",
        alignItems: "center",
      },
      button: {
        borderRadius: 20,
        padding: 10,
      },
      buttonOpen: {
        backgroundColor: "#272932",
        padding:20,
        marginTop:45,
      },
      buttonClose: {
        backgroundColor: "#4d7ea8",
        padding:20,
        marginTop:30,
        paddingVertical:25,
        paddingHorizontal:30,
      },
      textStyle: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize:20,
      },
      modalText: {
        textAlign:"left",
        lineHeight:32,
        fontSize:20,
        marginBottom:20,
        color:"#111",
          }
})
