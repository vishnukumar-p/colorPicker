// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
color: ${props => (props.isActive ? '#334155' : '#1e293b')}
  background-color: #ffffff;
  width: 100%;
  text-align: center;
  padding: 12px;
  margin-bottom: 10px;
  border: none;
  margin: 10px;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: bold;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
