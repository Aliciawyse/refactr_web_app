import styled from 'styled-components'
import { above } from '../../utils'

export const InputContainer = styled.div` 
display: grid;
place-items: center;
`

export const TextInput = styled.input`
  box-sizing: border-box;
  box-shadow: none;
  width: 25em;
  max-width: 100%;
  border-image: initial;
  border: 1px solid;
  border-color: inherit;
  border-radius: 3px;
  font: inherit;
  margin: 1.5em 0;
  padding: 0.75em;
  transition: border-color 0.2s ease 0s;
  &:hover {
    border: 1px solid lightgray;
  }
  ${above.medSmall`
  width: 45em;
  `}
  ${above.large`
  width: 65em;
  `}
`
export const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 0.3em;
  color: black;
  font-size: 12px;
  font-weight: 600;
  ${above.med` 
    font-size: 14px;
  `}
`
export const ErrorMessage = styled.span`
  display: block;
  color: red;
  font-size: 12px;
  margin-bottom: 1.5em;
`