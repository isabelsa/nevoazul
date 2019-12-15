import React from 'react'
import { Label, Text, MailchimpInput } from '../UI'
import * as S from './Newsletter.css'

type NewsletterProps = {
  content: {
    newsletter_description: string
    newsletter_kicker: string
    newsletter_title: string
    newsletter_input_label: string
    newsletter_input_placeholder: string
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

        <div id="mc_embed_signup">
          <S.FormHolder
            action="https://facebook.us8.list-manage.com/subscribe/post?u=09850e01d3a771ec59cdf162e&amp;id=270941e523"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <MailchimpInput
              id="MERGE0"
              type="email"
              name="EMAIL"
              label={content.newsletter_input_label}
              placeholder={content.newsletter_input_placeholder}
              value={email}
              onChange={(e: any) => setEmail(e.currentTarget.value)}
            />
          </S.FormHolder>
        </div>
      </S.NewseletterContent>
    </S.Newsletter>
  )
}

export default Newsletter
