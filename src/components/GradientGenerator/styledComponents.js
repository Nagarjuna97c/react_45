import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`

export const Heading = styled.h1`
  font-size: 32px;
  color: #ffffff;
`
export const Para = styled.p`
  font-size: 22px;
  color: #ededed;
`
export const RowFlexContainer = styled.div`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const ColmunFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const Label = styled.label`
  font-size: 20px;
  color: #ffffff;
`

export const Input = styled.input`
  border: none;
  margin: none;
  outline: none;
  padding: 0;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  height: 40px;
  width: 100px;
  outline: none;
  border: none;
  border-radius: 7px;
  background-color: #00c9b7;
  color: #1e293b;
  font-size: 18px;
`
