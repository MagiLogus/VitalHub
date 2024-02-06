import { Container } from "../../components/Container/Style";
import { Input } from "../../components/Input/Style";
import { LinkMedium } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Title";


export const Login = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" secureTextEntry />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            {/*     <Button>
                <ButtonTitle></ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle></ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount></TextAccount>
            </ContentAccount>  */}

        </Container>
    );
};