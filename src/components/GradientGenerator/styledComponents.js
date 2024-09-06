// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 1140px;
  }
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Open Sans';
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionDescription = styled.p`
  font-size: 18px;
  font-family: 'Open Sans';
  color: #ededec;
  line-height: 1.5;
`
export const DirectionContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorDescription = styled.p`
  font-size: 18px;
  font-family: 'Open Sans';
  color: #ededec;
  line-height: 1.5;
`
export const ColorListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin: 10px;
  border: none;
  border-radius: 15px;
  min-width: 25px;
  color: #1e293b;
  outline: none;
  cursor: pointer;
`
