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