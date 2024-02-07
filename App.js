import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegation } from './src/screens/Navegation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { PasswordReset } from './src/screens/PasswordReset/PasswordReset';

const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium })

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
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='PasswordReset' component={PasswordReset} options={{ title: 'Recuperar Senha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


