import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, changeDirectionInput, selected} = props
  const {value, displayText} = itemDetails

  const changeDirection = () => {
    changeDirectionInput(value)
  }

  return (
    <li>
      <Button
        type="button"
        value={value}
        onClick={changeDirection}
        selected={selected}
      >
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
