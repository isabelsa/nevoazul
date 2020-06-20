import * as React from 'react'

import * as S from './Gallery.css'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { ArrowRight, CaptionWithNumber } from '../../UI'

import pedro from '../../../assets/images/pedro.jpg'
import bernardino from '../../../assets/images/about_bernardino.jpg'
import instituto from '../../../assets/images/about_instituto.jpg'
import sergio from '../../../assets/images/about_sergio.jpg'
import processo from '../../../assets/images/about_processo.jpg'

export const images = [instituto, processo, pedro, bernardino, sergio]

const Gallery = ({ paginate, page, direction, setPage }) => {
  const imageIndex = wrap(0, images.length, page)

  const variants = {
    enter: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0.5,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <S.Wrapper>
      <S.GalleryHolder>
        <S.Gallery>
          <AnimatePresence custom={direction}>
            <S.Image
              as={motion.img}
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 200 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            />
          </AnimatePresence>
        </S.Gallery>

        <S.GalleryControls>
          <CaptionWithNumber
            number="01"
            description="A concepção da Nevoazul"
          />
          <ArrowRight onClick={() => paginate(1)} />
        </S.GalleryControls>
      </S.GalleryHolder>
    </S.Wrapper>
  )
}

export default Gallery
