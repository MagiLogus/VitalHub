import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/Style";

export const CreateAccount = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Criar Conta</Title>

            <ContentSubtitle>
                <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro</Subtitle>
            </ContentSubtitle>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" />

            <Input placeholder="Confirmar Senha" />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkAction>Cancelar</LinkAction>

        </Container>
    );
};