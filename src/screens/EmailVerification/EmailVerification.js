import { Button } from "../../components/Button/Style";
import { Container, ContentSubtitle, InputContainer } from "../../components/Container/Style";
import { VerificationInput } from "../../components/Input/Style";
import { LinkAction } from "../../components/Links/Style";
import { Logo } from "../../components/Logo/Style";
import { ButtonTitle, Subtitle, SubtitleFocus, Title } from "../../components/Title/Style";


export const EmailVerification = () => {
    return (
        <Container>

            <Logo source={require("../../assets/images/logo_screens.png")} />

            <Title>Verifique Seu E-mail</Title>

            <ContentSubtitle>
                <Subtitle>Digite o código de 4 dígitos enviado para <SubtitleFocus>username@email.com</SubtitleFocus></Subtitle>
            </ContentSubtitle>

            <InputContainer>
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
                <VerificationInput value={"0"} />
            </InputContainer>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkAction>Reenviar Código</LinkAction>

        </Container>
    );
};