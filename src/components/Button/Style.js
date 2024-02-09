import styled from "styled-components";

export const Button = styled.TouchableOpacity`
height: 44px;
background-color: #496BBA;
border-radius: 5px;
padding: 12px 8px 12px 8px;
margin-top: 30px;
border: 1px solid #496BBA;
align-items: center;
justify-content: center;
`

export const ButtonGoogle = styled(Button)`
background-color: #FAFAFA;
gap: 10px;
margin-top: 15px;
margin-bottom: 15px;
flex-direction: row;
`
export const ButtonLogoff = styled(Button)`
background-color: #ACABB7;
width: 60%;
align-self: center;
border: 1px solid #ACABB7;
`