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
import ResultImc from "./Results/ResultImc"

export default function Form() {

const[height, setHeigth] = useState(null)
const[weigth, setWeigth] = useState(null)
const[messageimc, setMessageImc]=useState("Preencha o peso e altura")
const[imc, setImc] = useState(null)
const[TextButton, setTextButton]=useState("Calcular")
const [errorMensage, setErrorMensage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator()
{
  let heightFormat = height.replace("," , ".")
  let weigthFormat = weigth.replace(",", ".")
  let totalImc = ((weigthFormat/(heightFormat*heightFormat)).toFixed(2));

  setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
  setImc(totalImc)
}

function verificationIMC()
{
  if(imc == null)
  {
    Vibration.vibrate();
    setErrorMensage("Campo obrigatório*")
  }
}



function validationImc()
{
  console.log(imcList)
  if(weigth != null && height != null)
  {
    imcCalculator()
    setHeigth(null)
    setWeigth(null)
    setMessageImc("Seu imc é: ")
    setTextButton("Calcular novamente")
    setErrorMensage(null)
  }
  else{
  verificationIMC()
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("preencha o peso e altura")
  }
}

    return (
     
       
      <View style={styles.FormContext}>
        {imc == null ? 
         <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMensage}>{errorMensage}</Text>
            <TextInput style={styles.formInput} placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setHeigth} value={height}>
            </TextInput>


            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMensage}>{errorMensage}</Text>
            <TextInput style={styles.formInput} placeholder="Ex. 75.58" keyboardType="numeric" onChangeText={setWeigth} value={weigth}>
            </TextInput>

            <TouchableOpacity 
                        onPress={validationImc}
                        style={styles.ButtonCalculator}>
              
                        <Text style={styles.TextbuttonCalculator}>{TextButton}</Text>
                      </TouchableOpacity>

            </Pressable>  
         :
         <View style={styles.exibitionResultIMC}>
                  <ResultImc messageResultImc={messageimc} resultImc={imc}/> 

                     <TouchableOpacity 
                        onPress={validationImc}
                        style={styles.ButtonCalculator}>
              
                        <Text style={styles.TextbuttonCalculator}>{TextButton}</Text>
                      </TouchableOpacity>
          </View>
      }
      <FlatList 
      showsVerticalScrollIndicator={false}
      style={styles.listImcs}
      data={imcList.reverse()}
      renderItem={({item}) =>
      {
       return(<Text style={styles.resultImcItem}>
         <Text style={styles.resultImcItemList}>Histórico de calculos: </Text>
         {item.imc}
       </Text>)
      }}
      keyExtractor={(item) =>{item.id}}
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
             backgroundColor:"#edf2f4",
             alignItems:"center",
             borderTopLeftRadius:30,
             borderTopRightRadius:30,
             paddingTop:15,
             marginTop:"20%",
             padding:10,
            },
    
            form:
            {
              width:"100%",
              height:"50%",
              marginTop:"6%",
            },
    
            formLabel:
            {
              color:"#50514f",
              fontSize:20,
              paddingLeft:20,
              fontWeight:"bold"
            },
    
            formInput:
            {
                width:"90%",
                borderRadius:50,
                backgroundColor:"#f6f6f6",
                height:40,
                margin:10,
                paddingLeft:10,
            },
            ButtonCalculator:
            {
                borderRadius:50,
                alignItems:"center",
                justifyContent:"center",
                width:"80%",
                backgroundColor:"#17bebb",
                paddingTop:14,
                paddingBottom:14,
                marginTop:30,
                marginBottom:10,
                marginLeft: "10%",
            },
            TextbuttonCalculator:
            {
                fontSize:20,
                color:"#fff",
            },
            errorMensage:
            {
                fontSize:12,
                color:"#dc0000",
                fontWeight:"bold",
                paddingLeft:20,
            },
            exibitionResultIMC:
            {
                width:"100%",
                height:"50%",
            },
            listImcs:
            {
                backgroundColor:"#edf2f4",
                padding:20,
                marginTop:150,
                borderRadius:15,
                marginBottom:15,
            },
            resultImcItem:
            {
                fontSize:25,
                color:"#111",
                height:50,
                width:"100%",
                
            },
        })