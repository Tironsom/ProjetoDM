import React from "react";
import { View, Text,StyleSheet} from "react-native";
import Texto from "../components/Texto";
import But from "../components/But";
import { Button} from "react-native-paper";
import { useState } from "react";

const Inicio = (props) => {
    const [nome, setNome] = useState("");
    const handleNomeChange = (newNome) => {
        setNome(newNome);
      };
      const gotoCadastro = ()=>{
        props.navigation.navigate('Drawer')

    }
   return(
    <View>
        <View>
            <Texto label="Email:" onChangeText={handleNomeChange}></Texto>
            <Texto label="Senha:" onChangeText={handleNomeChange}></Texto>
            <Button style = {{backgroundColor:'green'}}onPress={gotoCadastro} >Entrar</Button>
        </View>
        <View>
            <But label="Criar minha conta" color="blue" size="large" />
        <   But label="Esqueci minha senha" color="gray" size="large" />
        </View>
    </View>
   ) 


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container_bot: {
        marginTOp: 2,
    },
    View: {
        backgroundColor:'#372775',
    }
  });

  export default Inicio
