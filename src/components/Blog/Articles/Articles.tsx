import React from 'react'

import ArticleBig from './ArticleBig/ArticleBig'
import ArticleSmall from './ArticleSmall/ArticleSmall'

import * as S from './Arcticles.css'

const Articles = () => {
  return (
    <S.Holder>
      <S.Flex>
        <ArticleSmall
          title="Inês Santos Silva: O Futuro tem futuro?"
          description="An array is a special type of data type which can store multiple values of different data types sequentially using a special syntax."
          tags={['csjkd', 'dwaçs']}
          link="/blog/ines-santos-silva"
        />
        <ArticleBig
          title="Um Smart Contract não se cansa, nem se engana"
          description="Em breve podemos viver num futuro no qual as organizações já não têm funcionários ou gestores, mas sim um conjunto de rotinas de software que determina as suas acções. Com grupos em que todos os seus intervenientes podem propor, votar, desenvolver e implementar novas medidas."
          tags={['csjkd', 'dwaçs']}
          link="/blog/ines-santos-silva"
        />
        <ArticleBig
          title="A comunicação de ciência chega a todos"
          description="A ciência é feita no secretismo de laboratórios e instituições académicas, mas os seus resultados pertencem à sociedade. No entanto, há um grande desafio neste transporte de informação - quando as investigações não são transmitidas de forma eficiente e adaptada, a mensagem fica comprometida."
          tags={['csjkd', 'dwaçs']}
          link="/blog/ines-santos-silva"
        />
      </S.Flex>
    </S.Holder>
  )
}

export default Articles
