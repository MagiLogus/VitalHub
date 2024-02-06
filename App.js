import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegation } from './src/screens/Navegation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';

const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegação
    //Container
    //stacknavigator 
    //stackscreen
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Navegacao' component={Navegation} options={{ title: 'Navegação' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'Recuperar Senha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


