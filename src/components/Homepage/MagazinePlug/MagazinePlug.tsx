import React from 'react'

import { ArrowLink } from '../../UI/index'

import * as S from './MagazinePlug.css'

const MagazineOrderNext = () => {
  return (
    <S.MagazinePlug>
      <S.Content>
        <S.ContentHighlight>No próximo número</S.ContentHighlight>
        <S.ContentTitle> Conversas em prol da humanidade.</S.ContentTitle>
        <S.ContentTextMobile>
          A nova edição da Nevoazul está a chegar. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </S.ContentTextMobile>
        <S.AsteriskShape />

        <ArrowLink>Reserva já</ArrowLink>
      </S.Content>

      <S.ContentDescription>
        <S.ContentText>
          A nova edição da Nevoazul está a chegar. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </S.ContentText>
      </S.ContentDescription>

      <S.ContentImage />
    </S.MagazinePlug>
  )
}

export default MagazineOrderNext
