import { Button, ButtonGoogle } from "../../components/Button/Style";
import { Container } from "../../components/Container/Style";
import { GoogleIcon } from "../../components/Icons/Icons";
import { Input } from "../../components/Input/Style";
import { LinkBold, LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../components/Title/Title";
import { ContentAccount, TextAccount } from "./Style";


export const Login = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Entrar ou Criar Conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <GoogleIcon source={require("../../assets/images/google_icon.png")} />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold></TextAccount>
            </ContentAccount>

        </Container>
    );
};