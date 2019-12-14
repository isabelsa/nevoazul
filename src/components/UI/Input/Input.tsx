import React from 'react'

import * as S from './Input.css'

type InputProps = {
  label: string
  placeholder: string
  value: string
  onChange: any
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <S.InputHolder {...props}>
      <S.Detail>{label}</S.Detail>
      <S.Input placeholder={placeholder} value={value} onChange={onChange} />
    </S.InputHolder>
  )
}

export default Input
