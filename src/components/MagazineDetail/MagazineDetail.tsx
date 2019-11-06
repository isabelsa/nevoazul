import React from 'react'

import { Slideshow } from './Slideshow/Slideshow'
import { ArrowRight } from '../UI/index'

import * as S from './MagazineDetail.css'

const MagazineDetail = () => {
  const [[page, direction], setPage] = React.useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <S.MagazineDetail>
      <S.DetailGallery>
        <Slideshow
          paginate={paginate}
          direction={direction}
          page={page}
          setPage={setPage}
        />
      </S.DetailGallery>
      <S.DetailInformation>
        {' '}
        <S.Next onClick={() => paginate(1)}>
          <ArrowRight />
        </S.Next>
        <S.Prev onClick={() => paginate(-1)}>{'‣'}</S.Prev>
      </S.DetailInformation>
    </S.MagazineDetail>
  )
}

export default MagazineDetail
