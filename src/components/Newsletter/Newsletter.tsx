import React from 'react'
import { Label, Title, Text } from '../UI'
import * as S from './Newsletter.css'

const Newsletter = () => {
  return (
    <S.Newsletter>
      <S.NewseletterContent>
        <Label>Subscreve à newsletter</Label>
        <S.Title>A Internet num Telegrama</S.Title>
        <Text>
          Uma newsletter mensal de poucas linhas sobre como a tecnologia, a
          cultura e o design nos podem tornar mais humanos numa era cada vez
          mais digital.{' '}
        </Text>
      </S.NewseletterContent>
    </S.Newsletter>
  )
}

export default Newsletter
