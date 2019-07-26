import React from 'react'

import Logo from '@/components/Logo/Logo'

import * as S from './Footer.css'

const Footer = () => {
  return (
    <S.Footer>
      <S.Holder>
        <div>
          <Logo />
          <p>
            Nunca na historia tivemos acesso a tantos conteudos, agora depende
            de nos usa-los em prol de um futuro melhor.
          </p>
        </div>
        <div>
          <p>
            Nunca na historia tivemos acesso a tantos conteudos, agora depende
            de nos usa-los em prol de um futuro melhor.
          </p>
        </div>
      </S.Holder>
    </S.Footer>
  )
}

export default Footer
