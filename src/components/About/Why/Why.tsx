import * as React from 'react'
import { ArrowLink } from '../../UI/index'

import * as S from './Why.css'

const Why = () => {
  return (
    <S.Wrapper>
      <S.Why>
        <S.TitleHolder>
          <S.Title>Por conversas melhores</S.Title>
        </S.TitleHolder>
        <S.Text>
          Queremos ajudar-te a compreenderes, e a usares de forma mais
          significativa, os meios de comunicacao que tens ao teu alcance. Ao
          tornares-te patrono da Nevoazul, teras acesso prioritario a revista e
          a conteudos exclusivos que pretendem questionar como a comunicacao
          pode ser usada em prol da humanidade.
        </S.Text>
        <ArrowLink>Junta-te à conversa</ArrowLink>
        <S.ListItem>
          Iras receber uma newsletter especial com dicas sobre livros, vídeos e
          outras ferramentas de comunicacaoo que te podem ajudar a melhorar o
          teu trabalho e aproveitares melhor as horas de lazer.
        </S.ListItem>
        <S.ListItem>
          Vais poder ver fotografias e vídeos dos bastidores das nossas
          entrevistas.
        </S.ListItem>
        <S.ListItem>
          Podes acompanhar o nosso processo de trabalho e ficar a conhecer, em
          primeira mão, como criamos a Nevoazul.
        </S.ListItem>
        <S.ListItem>
          Vais ser o primeiro a receber as novas edições da Nevoazul.
        </S.ListItem>
        <S.ListItem>
          Irás encontrar postais da Nevoazul, na tua caixa de correio, com
          memorandos para conversas melhores.
        </S.ListItem>
      </S.Why>
    </S.Wrapper>
  )
}

export default Why
