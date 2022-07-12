import React, {useState} from "react"
import 
{
  View, 
  TextInput, 
  Text, 
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  StyleSheet
} from 'react-native';

import ResultML from './ResultAgua/ResultML'

export default function Form() {

const [weigth, setWeigth] = useState(null)
const[Litros, setLitros]= useState(null)
const [errorMensage, setErrorMensage]= useState(null)
const [TextButton, setTextButton] = useState("Calcular")
const [messageML, setMessageML] = useState('Preencha seu peso')
const [MLlist, setMLlist] = useState([])

function MLCalculator()
{
  let weigthFormat = weigth.replace(',' , '.')
  let toltalML = (((weigthFormat*35)/1000).toFixed(2));

  setMLlist ((arr) => [...arr, {id: new Date().getTime(), Litros: toltalML}])
  setLitros(toltalML)
}

function verificationML()
{
  if(Litros == null)
  {
    Vibration.vibrate();
    setErrorMensage("Campo Obrigatório**")
  }
}

function validationML()
{
  console.log(MLlist)
  if(weigth != null)
  {
    MLCalculator()
    setWeigth(null)
    setMessageML('Você deve tomar: ')
    setTextButton('Calcular novamente?')
    setErrorMensage(null)
  }
  else
  {
    verificationML()
    setLitros(null)
    setTextButton("Calcular")
    setErrorMensage("Preencha o campo 'Peso' ")
  }
}


    return (
     
       
      <View style={styles.FormContext}>

        {Litros == null ?

      <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMensage}>{errorMensage}</Text>
            <TextInput style={styles.formInput} placeholder="Ex. 85,5" keyboardType="numeric" onChangeText={setWeigth} value={weigth}>
            </TextInput>

            <TouchableOpacity 
                        onPress={validationML}
                        style={styles.ButtonCalculator}>
              
                        <Text style={styles.TextbuttonCalculator}>{TextButton}</Text>
                      </TouchableOpacity>
      </Pressable>
      
      :

      <View style={styles.exibitionResultIMC}>
                  <ResultML messageResultML={messageML} resulML={Litros + ' LT'}/> 

                     <TouchableOpacity 
                        onPress={validationML}
                        style={styles.ButtonCalculator}>
              
                        <Text style={styles.TextbuttonCalculator}>{TextButton}</Text>
                      </TouchableOpacity>
          </View>

      }

      <FlatList 
      showsVerticalScrollIndicator={false}
      style={styles.listML}
      data={MLlist.reverse()}
      renderItem={({item}) =>
    {
      return(<Text style={styles.resultMLitem}>
        <Text style={styles.resultMLitemList}>Histórico de calculos: </Text>
        {item.Litros  +' Lt'}
      </Text>)
    }
    }
    keyExtractor={(item) => {item.id}}
      >
 
      </FlatList>
      </View>
    );
  }

  const styles = StyleSheet.create 
  ({
    FormContext:
    {
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor:"#e6e6ea",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:15,
        marginTop:10,
        padding:10,
    },

    form:
    {
        width:"100%",
        height:"auto",
    },
    formLabel:
    {
       color:"#50514f",
       fontSize:18,
       paddingLeft:20,
    },
    
    formInput:
    {
       width:"90%",
       borderRadius:50,
       backgroundColor:"#fffcff",
       height:40,
       margin:12,
       paddingLeft:10,
    },
    ButtonCalculator:
    {
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      width:"50%",
      backgroundColor:"#247ba0",
      padding:10,
      marginLeft: "25.5%",
    },
    TextbuttonCalculator:
    {
       fontSize:20,
       color:"#faf9f9",
    },
    errorMensage:
    {
       fontSize:12,
       color:"#cbd4c2",
       fontWeight:"bold",
       paddingLeft:20,
    },
    exibitionResultIMC:
    {
       width:"100%",
       height:"50%",
       marginTop:60,
       color:'#fff',
    },
    listML:
    {
       backgroundColor:"#fff",
       padding:20,
       marginTop:10,
       borderRadius:15,
       marginBottom:15,
    },
    resultMLitem:
    {
       fontSize:25,
       color:"#111",
       height:50,
       width:"100%",   
    },
  })
  