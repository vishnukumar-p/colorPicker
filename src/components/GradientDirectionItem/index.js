// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {obj, isActive, onChangeDirection} = props
  const {value, displayText} = obj
  const onClicked = () => {
    onChangeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton isActive={isActive} type="button" onClick={onClicked}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
