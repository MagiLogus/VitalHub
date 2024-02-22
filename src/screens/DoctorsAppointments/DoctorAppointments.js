import { StatusBar } from "react-native";
import { Container, FilterAppointment, ImageTopBar, TopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../../components/Container/Style";
import { AlertIcon } from "../../components/Icons/Style";
import { Subtitle, TitleTopBar } from "../../components/Title/Style";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AbsListAppointment } from "../../components/AbsListAppointment/AbsListAppointment";
import { useState } from "react";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 1, nome: "Carlos", situacao: "realizado" },
    { id: 1, nome: "Carlos", situacao: "cancelado" },
    { id: 1, nome: "Carlos", situacao: "cancelado" }
]

export const DoctorsAppointments = () => {
    const [statusList, setStatusList] = useState("pendente")
    return (
        <Container>
            <StatusBar translucent backgroundColor="transparent" />
            <TopBar>
                <TopBarContainer>
                    <TopBarTitleContainer>
                        <ImageTopBar source={require("../../assets/images/user_profile.png")} />
                        <TopBarImageContainer>
                            <Subtitle>Bem Vindo</Subtitle>
                            <TitleTopBar>Dr(a). Claudio</TitleTopBar>
                        </TopBarImageContainer>
                    </TopBarTitleContainer>
                    <AlertIcon />
                </TopBarContainer>
            </TopBar>
            <CalendarList />
            <FilterAppointment>
                <AbsListAppointment textButton={"Agendadas"} clickButton={statusList === "pendente"} onPress={() => setStatusList("pendente")} />
                <AbsListAppointment textButton={"Realizadas"} clickButton={statusList === "realizado"} onPress={() => setStatusList("realizado")} />
                <AbsListAppointment textButton={"Canceladas"} clickButton={statusList === "cancelado"} onPress={() => setStatusList("cancelado")} />
            </FilterAppointment>
        </Container>
    );
};