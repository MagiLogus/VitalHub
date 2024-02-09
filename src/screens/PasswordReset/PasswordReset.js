import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";

export const PasswordReset = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Redefinir Senha</Title>

            <ContentSubtitle>
                <Subtitle>Insira e confirme a sua nova senha</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Nova Senha" />

            <Input placeholder="Confirmar Nova Senha" />

            <Button>
                <ButtonTitle>Confirmar Nova Senha</ButtonTitle>
            </Button>

        </Container>
    );
};