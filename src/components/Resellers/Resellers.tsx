import React from 'react'
import { Text, CaptionWithNumber, ArrowRight } from '../UI'
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
      <S.GalleryHolder>
        <S.Gallery />
        <S.GalleryControls>
          <CaptionWithNumber
            number={resellersDescriptionMock[reseller].number}
            description={resellersDescriptionMock[reseller].description}
          />
          <S.Control>
            <ArrowRight
              onClick={() => setReseller((reseller + 1) % resellersMock.length)}
            />
          </S.Control>
        </S.GalleryControls>
      </S.GalleryHolder>
      <S.Column>
        {resellersMock.map(res => {
          return (
            <S.Resellers key={res.id} onClick={() => setReseller(res.id)}>
              <S.Kicker>{res.location}</S.Kicker>
              <S.ResellerHolder>
                <S.ResellerName isSelected={res.id === reseller}>
                  {res.name}
                </S.ResellerName>
              </S.ResellerHolder>
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
