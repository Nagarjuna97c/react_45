import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  width: 100px;
  outline: none;
  border: none;
  border-radius: 7px;
  opacity: ${props => (props.selected ? 1 : 0.5)};
`
