import { StatusBar } from "react-native";
import { CalendarContainer, Container, ImageTopBar, TopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../../components/Container/Style";
import { AlertIcon } from "../../components/Icons/Style";
import { Subtitle, TitleTopBar } from "../../components/Title/Style";
import { CalendarList } from "../../components/Calendar/Calendar";


















export const DoctorsAppointments = () => {
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TopBar>
                <TopBarContainer>
                    <TopBarTitleContainer>
                        <ImageTopBar source={require("../../assets/images/user_profile.png")} />
                        <TopBarImageContainer>
                            <Subtitle>Bem Vindo</Subtitle>
                            <TitleTopBar>Dr. Claudio</TitleTopBar>
                        </TopBarImageContainer>
                    </TopBarTitleContainer>
                    <AlertIcon source={require("../../assets/images/alert_icon.png")} />
                </TopBarContainer>
            </TopBar>

            <CalendarList />
        </Container>
    );
};