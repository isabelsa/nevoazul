import React from 'react'
import { Heading, Text, CaptionWithNumber, ArrowRight } from '../UI'
import * as S from './Resellers.css'

import { resellersMock, resellersDescriptionMock } from './data'

const Resellers = () => {
  const [reseller, setReseller] = React.useState(0)

  return (
    <S.Wrapper>
      <div>
        <S.Gallery />
        <S.GalleryControls>
          <CaptionWithNumber
            number={resellersDescriptionMock[reseller].number}
            description={resellersDescriptionMock[reseller].description}
          />
          <ArrowRight
            onClick={() => setReseller((reseller + 1) % resellersMock.length)}
          />
        </S.GalleryControls>
      </div>
      <S.Column>
        {resellersMock.map(res => {
          console.log(res, Resellers)
          return (
            <S.Resellers
              key={res.id}
              onClick={() => setReseller(res.id)}
              isSelected={res.id === reseller}
            >
              <S.Kicker>{res.location}</S.Kicker>
              <Heading>{res.name}</Heading>
            </S.Resellers>
          )
        })}
      </S.Column>
      <S.Column>
        <div>
          <S.Heading>Onde encontrar</S.Heading>
          <Text>
            Na Nevoazul gostamos de estar em boa companhia. Para isso,
            selecionamos algumas das nossas lojas preferidas, de norte a sul do
            país, onde vais poder comprar a nossa revista. Aponta os nomes e as
            moradas e prepara-te para te surpreenderes pelo conceito e produtos
            que estes sítios têm para oferecer.
          </Text>
        </div>

        <div>
          <S.Heading>Interessado na nevoazul?</S.Heading>
          <Text>
            Na Nevoazul gostamos de estar em boa companhia. Para isso,
            selecionamos algumas das nossas lojas preferidas, de norte a sul do
            país, onde vais poder comprar a nossa revista.
          </Text>
        </div>
      </S.Column>
    </S.Wrapper>
  )
}

export default Resellers
