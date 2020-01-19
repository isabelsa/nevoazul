import React from 'react'
import { Heading, Text, CaptionWithNumber, Kicker } from '../UI'
import * as S from './Resellers.css'

const Resellers = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Gallery />
        <CaptionWithNumber number="01" description="Kdlasjkh" />
      </div>
      <S.Column>
        <div>
          <Kicker>Mercado</Kicker>
          <p>Çdlkasjd</p>
        </div>
        <div>
          <Kicker>Mercado</Kicker>
          <p>^dlkasjd</p>
        </div>
        <div>
          <Kicker>Mercado</Kicker>
          <p>Çdlkasjd</p>
        </div>
      </S.Column>
      <S.Column>
        <Heading>Onde encontrar</Heading>
        <Text>
          Na Nevoazul gostamos de estar em boa companhia. Para isso,
          selecionamos algumas das nossas lojas preferidas, de norte a sul do
          país, onde vais poder comprar a nossa revista. Aponta os nomes e as
          moradas e prepara-te para te surpreenderes pelo conceito e produtos
          que estes sítios têm para oferecer.
        </Text>

        <Heading>Interessado na nevoazul?</Heading>
        <Text>
          Na Nevoazul gostamos de estar em boa companhia. Para isso,
          selecionamos algumas das nossas lojas preferidas, de norte a sul do
          país, onde vais poder comprar a nossa revista.
        </Text>
      </S.Column>
    </S.Wrapper>
  )
}

export default Resellers
