import { createDrawerNavigator } from "@react-navigation/drawer";
import Tela1 from "./Tela1";
import Modificar from "./Modificar";
import Cadastro from "./Cadastro";
import Coleta from "./Coleta";
import Agradecimento from "./Agradecimento";
const DrawerNavigator = createDrawerNavigator()

const Drawer = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{drawerActiveTintColor: 'tomato',drawerLabelStyle:{color:'Violet'}}} >
            
            
            
            <DrawerNavigator.Screen  name="Nova Pesquisa" component={Cadastro} />
            <DrawerNavigator.Screen name="Modificar" component={Modificar} />
            <DrawerNavigator.Screen name="Carnaval" component={Tela1} />
            <DrawerNavigator.Screen name="coleta"component={Coleta}/>
            <DrawerNavigator.Screen name="Agradecimento" component={Agradecimento}/>
        

        </DrawerNavigator.Navigator>

    )
}
export default Drawer
