//Importação
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useState } from 'react'
import Botao from '../components/Botao'
import { PaperProvider, MD3LightTheme as DefaulTheme } from 'react-native-paper'
import { TextInput } from 'react-native-paper'
const theme = {
  ...DefaulTheme,

}
//Definição
const Cadastro = (props) => {

  const [txtNome, setNome] = useState('')
  const [txtData, setData] = useState('')

  const Cadastra = () => {


    console.log("Entrou na função de cadastro")

    const [nome, setNome] = useState('')
    const [txtData, setTxtData] = useState('')


  }

  return (
    <PaperProvider theme={theme} >
      <View style={estilos.view}>




        <View style={estilos.cInput}>

          <Text style={estilos.texto}>Nome</Text>
          <TextInput

            style={estilos.textInput}
            value={txtNome}
            onChangeText={setNome}
            placeholder=' '
          />
          <Text style={estilos.txt}>Preencha o nome da Pesquisa</Text>

          <Text style={estilos.texto}>Data</Text>
          <TextInput
            style={estilos.textInput}

            value={txtData}
            onChangeText={setData}
            placeholder=' '
          />
          <Text style={estilos.txt} >Preencha a Data</Text>


        </View>

        <View >

          <Text style={estilos.texto} >Imagem</Text>
          <TextInput
            style={estilos.imagemt}

            placeholder='Câmera/Galeria de imagens '


          />



        </View>


        <View style={estilos.cBotoes}>
          <Botao texto="Cadastra" />



        </View>
      </View>
    </PaperProvider>
  )
}

const estilos = StyleSheet.create({
  imagemt: {
    marginTop: 7,
    borderWidth: 0.2,
    width: '80%',
    height: '50%',


  },
  view: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#3c1a7d',
  },
  txt: {
    fontSize: 15,
    color: 'red',
    fontFamily: 'averiaLibra-Regular'

  },
  texto: {
    fontSize: 25,
    color: '#f7f7f5',
    fontFamily: 'averiaLibra-Regular'

  },
  textInput: {
    marginTop: 5,
    fontSize: 30,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    color: '#000000'

  },

  cInput: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,

  },

  cBotoes: {
    flex: 0.25,
    flexDirection: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,


  },
})

//Exportação
export default Cadastro