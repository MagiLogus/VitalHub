import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegation } from './src/screens/Navegation/Navigation';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { PasswordRecover } from './src/screens/PasswordRecover/PasswordRecover';
import { PasswordReset } from './src/screens/PasswordReset/PasswordReset';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { EmailVerification } from './src/screens/EmailVerification/EmailVerification';
import { UserProfile } from './src/screens/UserProfile/UserProfile';

const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded, fontsError] = useFonts({ MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_500Medium, Quicksand_600SemiBold })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navegação
    //Container
    //stacknavigator 
    //stackscreen
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Navegacao' component={Navegation} options={{ title: 'Navegação' }} />
        <Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='PasswordRecover' component={PasswordRecover} options={{ title: 'Recuperar Senha' }} />
        <Stack.Screen name='PasswordReset' component={PasswordReset} options={{ title: 'Redefinir Senha' }} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} options={{ title: 'Criar Conta' }} />
        <Stack.Screen name='EmailVerification' component={EmailVerification} options={{ title: 'Verificar E-mail' }} />
        <Stack.Screen name='UserProfile' component={UserProfile} options={{ title: 'Perfil', headerShown: false }} />
      </Stack.Navigator>


    </NavigationContainer>
  );
}


