import styled from "styled-components"

export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #FAFAFA;
`

export const ContentSubtitle = styled.View`
width: 90%;
align-self: center;
justify-content: center;
flex-direction: row;
margin-top: 5px;
`
export const InputContainer = styled.View`
width: 90%;
align-self: center;
justify-content: space-between;
flex-direction: row;
margin-top: 20px;
`
export const ImageContainer = styled.Image`
width: 100%;
height: 40%;
background-size: cover;
`

export const TextBoxContainer = styled.View`
margin-top: 24px;
width: ${props => props.fieldWidth ? `${props.fieldWidth}%` : '100%'};
`
export const TextBoxArea = styled.View`
margin-top: 10px;
background-color: #F5F3F3;
min-height: 53px;
border-radius: 5px;
padding: 16px 16px;
`
export const TextBoxContainerRow = styled(TextBoxContainer)`
flex-direction: row;
justify-content: space-between;
`
export const TopBar = styled.View`
width: 100%;
height: 22.5%;
background-color: #60BFC5;
border-radius: 0px 0px 15px 15px;
align-items: center;
`
export const ImageTopBar = styled.Image`
width: 60px;
height: 60px;
background-size: cover;
border-radius: 5px;
`

export const TopBarContainer = styled.View`
width: 90%;
align-items: center;
justify-content: space-between;
flex-direction: row;
margin-top: 62px;
`

export const TopBarImageContainer = styled.View`
align-items: center;
justify-content: center;
margin-left: 10px;
`
export const TopBarTitleContainer = styled.View`
align-items: center;
justify-content: space-between;
flex-direction: row;
`
export const FilterAppointment = styled.View`
width: 90%;
flex-direction: row;
justify-content: space-between;
margin-top: 38px;
`