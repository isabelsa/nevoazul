import * as React from 'react'

import { ArrowLink } from '../../UI/index'

import * as S from './MagazinePlug.css'
import { ROUTES } from '../../../constants/routes'

const MagazineOrderNext = () => {
  const [isHovered, setHovered] = React.useState(false)

  return (
    <S.MagazinePlug>
      <S.Content>
        <S.ContentHighlight>No próximo número</S.ContentHighlight>
        <S.ContentTitle>
          Conversas <i>em prol</i> da humanidade.
        </S.ContentTitle>
        <S.ContentTextMobile>
          A nova edição da Nevoazul já chegou. Através de entrevistas em
          profundidade e artigos de reflexão, queremos questionar a relação que
          temos com os meios e perceber como podemos transformar informação em
          conhecimento.
        </S.ContentTextMobile>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <S.AsteriskShape isHovered={isHovered} />
          <ArrowLink to={ROUTES.root}>A nova revista</ArrowLink>
        </div>
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
