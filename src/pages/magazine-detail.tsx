import React from 'react'
import SEO from '@/components/SEO/SEO'
import MagazineDetail from '@/components/MagazineDetail/MagazineDetail'

const Magazines = () => {
  return (
    <>
      <SEO
        title="testing"
        description="testing"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <MagazineDetail />
    </>
  )
}

export default Magazines
