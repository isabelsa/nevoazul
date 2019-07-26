import * as React from 'react'

import * as S from './Hero.css'

const Hero = () => {
  return (
    <S.Hero>
      <S.Title>
        Nunca na historia tivemos acesso a tantos conteudos, agora{' '}
        <i>depende de nos</i> usa-los em prol de um futuro melhor.
      </S.Title>
      <S.Flex>
        <S.Text>
          Numa era conhecida pelas potencialidades da comunicacao, a pressao
          para estarmos atentos ao que se passa no mundo leva-nos, muitas vezes,
          a consumir conteudos em quantidade e nao em profundidade. Entretanto,
          somos tambem responsaveis por aquilo que partilhamos, produzimos e
          criamos. Porque numa sociedade movida a informacao, tao depressa
          estamos no papel de produtores, como no de consumidores.
        </S.Text>
        <S.Text>
          Numa era conhecida pelas potencialidades da comunicacao, a pressao
          para estarmos atentos ao que se passa no mundo leva-nos, muitas vezes,
          a consumir conteudos em quantidade e nao em profundidade. Entretanto,
          somos tambem responsaveis por aquilo que partilhamos, produzimos e
          criamos. Porque numa sociedade movida a informacao, tao depressa
          estamos no papel de produtores, como no de consumidores.
        </S.Text>
      </S.Flex>
    </S.Hero>
  )
}

export default Hero
