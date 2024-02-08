import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Title";

export const PasswordRecover = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Recuperar Senha</Title>

            <ContentSubtitle>
                <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Usuário ou E-mail" />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    );
};