import * as React from 'react'
import Gallery from '../Gallery/Gallery'

import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.Title>
        Nunca na história tivemos acesso a tantos conteúdos, agora{' '}
        <i>depende de nós</i> usa-los em prol de um futuro melhor.
      </S.Title>
      <S.Flex>
        <S.Text>
          Numa era conhecida pelas potencialidades da comunicação, a pressão
          para estarmos atentos ao que se passa no mundo leva-nos, muitas vezes,
          a consumir conteúdos em quantidade e não em profundidade. Entretanto,
          somos tambem responsáveis por aquilo que partilhamos, produzimos e
          criamos. Porque numa sociedade movida a informação, tão depressa
          estamos no papel de produtores, como no de consumidores.
        </S.Text>
        <S.Text>
          Com a Nevoazul, queremos questionar a relação que temos com os meios e
          perceber como podemos transformar a informacao em conhecimento. O
          nosso propósito e mostrar que a forma como comunicamos pode
          acrescentar valor a forma como trabalhamos. Através de entrevistas em
          profundidade e artigos de reflexão, vamos perceber como pessoas de
          diferentes áreas usam estas ferramentas para difundir uma mensagem
          significativa que representa os seus valores. Nunca na história
          tivemos acesso a tantos conteudos, agora depende de nós usá-los em
          prol de um futuro melhor.
        </S.Text>
      </S.Flex>
      <Gallery />
    </S.Hero>
  )
}

export default Hero
