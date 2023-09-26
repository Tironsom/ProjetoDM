import React from "react";
import { View, Text} from "react-native";
import Texto from "./components/Texto";
import But from "./components/But"

const Inicio = () => {
    const [nome, setNome] = useState("");
    const handleNomeChange = (newNome) => {
        setNome(newNome);
      };
   return(
    <View>
        <View>
            <Texto label="Email:" onChangeText={handleNomeChange}></Texto>
            <Texto label="Senha:" onChangeText={handleNomeChange}></Texto>
            <But label="Entrar" color="green" size="large" />
        </View>
        <View>
            <But label="Criar minha conta" color="blue" size="large" />
        <   But label="Esqueci minha senha" color="gray" size="large" />
        </View>
    </View>
   ) 


}

const styles = StyleSheet.create({
    container: {
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