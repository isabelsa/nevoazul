import React from 'react'
import { Text, TextSerif, MailchimpInput } from '../UI/index'
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
          <TextSerif>A revista</TextSerif>
          <Text>Comprar</Text>
          <Text>Números</Text>
          <Text>Ler online</Text>
        </S.Section>
        <S.Section>
          <TextSerif>Sobre</TextSerif>
          <Text>O projecto</Text>
          <Text>Revendedores</Text>
          <Text>Contactos</Text>
        </S.Section>
        <S.Section>
          <TextSerif>Comunidade</TextSerif>
          <Text>Instagram</Text>
          <Text>Facebook</Text>
          <Text>Telegrama</Text>
        </S.Section>
      </S.Sections>
    </S.Footer>
  )
}

export default Footer
