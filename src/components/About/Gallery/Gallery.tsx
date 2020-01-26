import * as React from 'react'

import * as S from './Gallery.css'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import pedro from '../../../assets/images/pedro.jpg'
import { CaptionWithNumber } from '../../UI'

export const images = [
  pedro,
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
]

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
    <>
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

      <S.GalleryCaption>
        <CaptionWithNumber number="01" description="Caption" />
      </S.GalleryCaption>
    </>
  )
}

export default Gallery
