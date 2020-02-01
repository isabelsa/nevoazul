import React from 'react'
import { Text, TextSerif, MailchimpInput, FooterLink } from '../UI/index'
import * as S from './Footer.css'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterIntro>
        <S.SubtitleHolder>
          <S.SubtitleDecoration />
          <S.Subtitle>A internet num telegrama</S.Subtitle>
        </S.SubtitleHolder>
        <Text>
          Uma newsletter mensal de poucas linhas sobre como a tecnologia, a
          cultura e o design nos podem tornar mais humanos numa era cada vez
          mais digital.
        </Text>
        <MailchimpInput />
      </S.FooterIntro>
      <S.Sections>
        <S.Section>
          <S.TextSerif>A revista</S.TextSerif>
          <FooterLink to="https://nevoazul.bigcartel.com/">Comprar</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/about">Sobre</FooterLink>
          <FooterLink to="/resellers">Revendedores</FooterLink>
        </S.Section>
        <S.Section>
          <S.TextSerif>Comunidade</S.TextSerif>
          <FooterLink to="https://www.instagram.com/nevoazul_magazine/">
            Instagram
          </FooterLink>
          <FooterLink to="https://www.facebook.com/nevoazul/">
            Facebook
          </FooterLink>
        </S.Section>
      </S.Sections>
    </S.Footer>
  )
}

export default Footer
