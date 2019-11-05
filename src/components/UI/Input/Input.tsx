import React from 'react'
import { Detail } from '../index'

import * as S from './Input.css'

type InputProps = {
  label: string
  placeholder: string
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <S.InputHolder>
      <Detail>{label}</Detail>
      <S.Input placeholder={placeholder} />
    </S.InputHolder>
  )
}

export default Input
