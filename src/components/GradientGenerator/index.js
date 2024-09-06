import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  DirectionContainer,
  ColorDescription,
  ColorListContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
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
    activeDirection: gradientDirectionsList[0].value,
    inputColorOne: '#8ae323',
    inputColorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeColorOne = event => {
    this.setState({inputColorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({inputColorTwo: event.target.value})
  }

  onChangeDirection = id => {
    this.setState({activeDirection: id})
  }

  onClickSubmit = () => {
    const {inputColorOne, inputColorTwo, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection},${inputColorOne},${inputColorTwo}`,
    })
  }

  render() {
    const {
      inputColorOne,
      inputColorTwo,
      activeDirection,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <DirectionContainer>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                obj={each}
                isActive={activeDirection === each.value}
                onChangeDirection={this.onChangeDirection}
              />
            ))}
          </DirectionContainer>
          <ColorDescription>Pick the Colors</ColorDescription>
          <ColorListContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{inputColorOne}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeColorOne}
                value={inputColorOne}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <ColorValue>{inputColorTwo}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeColorTwo}
                value={inputColorTwo}
              />
            </CustomInputAndColorContainer>
          </ColorListContainer>
          <GenerateButton onClick={this.onClickSubmit}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
