import React from 'react'
import { FlexCenter, Caption } from '../index'

import * as S from './Caption.css'

type CaptionProps = {
  number: string
  description: string
}

const CaptionWithNumber: React.FC<CaptionProps> = ({ number, description }) => {
  return (
    <FlexCenter>
      <S.CaptionNumber>{`${number}.`}</S.CaptionNumber>
      <Caption>{description}</Caption>
    </FlexCenter>
  )
}

export default CaptionWithNumber
