import React from 'react'
import { Text, TextSerif, FooterLink, ArrowLink } from '../UI/index'
import * as S from './Footer.css'

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterIntro>
        <S.SubtitleHolder>
          <S.SubtitleDecoration />
          <S.Subtitle>A internet num telegrama</S.Subtitle>
        </S.SubtitleHolder>
        <Text style={{ marginBottom: '24px' }}>
          Uma newsletter mensal de poucas linhas sobre como a tecnologia, a
          cultura e o design nos podem tornar mais humanos numa era cada vez
          mais digital.
        </Text>
        <ArrowLink isExternal to="https://telegrama.substack.com">
          Subscreve a newsletter
        </ArrowLink>
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
        </S.Section>
      </S.Sections>
    </S.Footer>
  )
}

export default Footer
