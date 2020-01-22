import React from 'react'
import { Heading, Text, CaptionWithNumber, ArrowRight } from '../UI'
import * as S from './Resellers.css'

import { resellersMock, resellersDescriptionMock } from './data'

type Reseller = {
  reseller_image: {
    url: string
  }
  reseller_kicker: string
  reseller_name: string
  reseller_description: string
}

type ResellersProps = {
  content: {
    resellers: Reseller[]
    reseller_where_to_find: string
    reseller_where_description: string
    reseller_inquiries: string
    reseller_inquiries_description: string
  }
}

const Resellers: React.FC<ResellersProps> = ({ content }) => {
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
          <S.Heading>{content.reseller_where_to_find}</S.Heading>
          <Text>{content.reseller_where_description}</Text>
        </div>

        <div>
          <S.Heading>{content.reseller_inquiries}</S.Heading>
          <Text>{content.reseller_inquiries_description}</Text>
        </div>
      </S.Column>
    </S.Wrapper>
  )
}

export default Resellers
