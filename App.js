import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./src/screens/Cadastro";
import Drawer from "./src/screens/Drawer";
import Inicio from "./src/screens/Inicio";

const Stack = createStackNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false,  headerTintColor: 'tomato', headerTitle: { backgroundColor: 'Violet' } }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Drawer" component={Drawer} />
       
      </Stack.Navigator>

    </NavigationContainer>
  )


}

export default App 
