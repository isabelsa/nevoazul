import React from 'react'
import { Label, Text } from '../UI'
import * as S from './Newsletter.css'

type NewsletterProps = {
  content: {
    newsletter_description: string
    newsletter_kicker: string
    newsletter_title: string
  }
}

const Newsletter: React.FC<NewsletterProps> = ({ content }) => {
  return (
    <S.Newsletter>
      <S.NewseletterContent>
        <Label>{content.newsletter_kicker}</Label>
        <S.Title>{content.newsletter_title}</S.Title>
        <Text>{content.newsletter_description}</Text>
      </S.NewseletterContent>
    </S.Newsletter>
  )
}

export default Newsletter
