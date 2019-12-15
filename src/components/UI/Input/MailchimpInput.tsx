import React from 'react'

import * as S from './MailchimpInput.css'

type InputProps = {
  label: string
  placeholder: string
  value: string
  onChange: any
  id: string
  name: string
  type: string
}

const MailchimpInput: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  label,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <S.InputHolder {...props}>
      <S.Detail>{label}</S.Detail>
      <S.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <S.Button
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="button"
      >
        <S.ArrowRight />
      </S.Button>
    </S.InputHolder>
  )
}

export default MailchimpInput
