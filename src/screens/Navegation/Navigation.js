import { Button, View } from "react-native";

export const Navegation = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center ", gap: 5 }}>
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
            <Button title="Recuperar Senha" onPress={() => navigation.navigate("PasswordReset")} />
        </View>
    );
}