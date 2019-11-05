import React from 'react'
import { Detail, NavLink } from '../../UI/index'

import * as S from './Highlight.css'

const Highlight = () => {
  return (
    <div id="highlight">
      <S.Wrapper>
        <S.HighlightPicture>
          <S.Picture />
        </S.HighlightPicture>
        <S.HighlightContent>
          <S.Holder>
            <Detail>Placeholder</Detail>
            <S.Title>Placeholder</S.Title>
            <S.Text>
              A nova edição da Nevoazul está a chegar. Através de entrevistas em
              profundidade e artigos de reflexão, queremos questionar a relação
              que temos com os meios e perceber como podemos transformar
              informação em conhecimento.
            </S.Text>
            <NavLink>Placeholder</NavLink>
          </S.Holder>
        </S.HighlightContent>
      </S.Wrapper>
    </div>
  )
}

export default Highlight
