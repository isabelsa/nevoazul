import React from 'react'
import { Label, Text, Input } from '../UI'
import * as S from './Newsletter.css'

type NewsletterProps = {
  content: {
    newsletter_description: string
    newsletter_kicker: string
    newsletter_title: string
  }
}

const Newsletter: React.FC<NewsletterProps> = ({ content }) => {
  const [email, setEmail] = React.useState('')
  return (
    <S.Newsletter>
      <S.NewseletterContent>
        <Label>{content.newsletter_kicker}</Label>
        <S.Title>{content.newsletter_title}</S.Title>
        <Text>{content.newsletter_description}</Text>

        <S.FormHolder
          action="https://facebook.us8.list-manage.com/subscribe/post?u=09850e01d3a771ec59cdf162e&amp;id=270941e523"
          method="post"
          target="_blank"
          novalidate
          rel="noopener"
        >
          <Input
            label="Subscreve a newsletter"
            placeholder="Subscreve a newsletter"
            value={email}
            onChange={(e: any) => setEmail(e.currentTarget.value)}
          />
        </S.FormHolder>
      </S.NewseletterContent>
    </S.Newsletter>
  )
}

export default Newsletter
