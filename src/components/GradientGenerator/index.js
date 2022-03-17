import {Component} from 'react/cjs/react.production.min'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Para,
  RowFlexContainer,
  ColmunFlexContainer,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    directionInput: gradientDirectionsList[0].value,
    color1Input: '#8ae323',
    color2Input: '#014f7b',
  }

  changeDirectionInput = inputValue => {
    this.setState({directionInput: inputValue})
  }

  changeColor1input = event => {
    console.log(event.target.value)
    this.setState({color1Input: event.target.value})
  }

  changeColor2input = event => {
    console.log(event.target.value)
    this.setState({color2Input: event.target.value})
  }

  applyGradient = () => {
    const {directionInput, color1Input, color2Input} = this.state
    this.setState({
      direction: directionInput,
      color1: color1Input,
      color2: color2Input,
    })
  }

  render() {
    const {
      direction,
      color1,
      color2,
      directionInput,
      color1Input,
      color2Input,
    } = this.state
    return (
      <MainContainer
        direction={direction}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <RowFlexContainer as="ul">
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              itemDetails={eachItem}
              changeDirectionInput={this.changeDirectionInput}
              selected={eachItem.value === directionInput}
            />
          ))}
        </RowFlexContainer>
        <Para>Pick the Colors</Para>
        <RowFlexContainer>
          <ColmunFlexContainer>
            <Label as="p">{color1Input}</Label>
            <Input
              type="color"
              id="head"
              name="head"
              value={color1Input}
              onChange={this.changeColor1input}
            />
          </ColmunFlexContainer>
          <ColmunFlexContainer>
            <Label as="p">{color2Input}</Label>
            <Input
              type="color"
              id="head"
              name="head"
              value={color2Input}
              onChange={this.changeColor2input}
            />
          </ColmunFlexContainer>
        </RowFlexContainer>
        <GenerateButton type="button" onClick={this.applyGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
