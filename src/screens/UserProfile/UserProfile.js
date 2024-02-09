
import { ScrollView, StatusBar, View } from "react-native";
import { Button, ButtonLogoff } from "../../components/Button/Style";
import { Container, ContentSubtitle, ImageContainer, TextBoxArea, TextBoxContainer, TextBoxContainerRow } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, EmailTitle, Subtitle, TextBoxText, TextBoxTitle, Title } from "../../components/Title/Style";

export const UserProfile = () => {
    return (
        <Container>

            <StatusBar translucent backgroundColor="transparent" />

            <ImageContainer source={require("../../assets/images/user_profile.png")} />

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: "90%",
            }}>
                <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false} overScrollMode="never">



                    <Title>Richard Kosta</Title>

                    <EmailTitle>richard.kosta@gmail.com</EmailTitle>

                    <TextBoxContainer>
                        <TextBoxTitle>Data de Nascimento:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>04/05/1999</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>

                    <TextBoxContainer>
                        <TextBoxTitle>CPF:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>859********</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>

                    <TextBoxContainer>
                        <TextBoxTitle>Endereço:</TextBoxTitle>
                        <TextBoxArea>
                            <TextBoxText>Rua: Vicenso Silva, 987</TextBoxText>
                        </TextBoxArea>
                    </TextBoxContainer>

                    <TextBoxContainerRow>
                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cep:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>06548-909</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>

                        <TextBoxContainer fieldWidth={45}>
                            <TextBoxTitle>Cidade:</TextBoxTitle>
                            <TextBoxArea >
                                <TextBoxText>Moema-SP</TextBoxText>
                            </TextBoxArea>
                        </TextBoxContainer>
                    </TextBoxContainerRow>

                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>

                    <Button>
                        <ButtonTitle>Editar</ButtonTitle>
                    </Button>

                    <ButtonLogoff>
                        <ButtonTitle>Sair do APP</ButtonTitle>
                    </ButtonLogoff>

                </ScrollView>
            </View>

        </Container>
    );
};