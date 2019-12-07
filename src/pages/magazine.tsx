import React from 'react'
import SEO from '@/components/SEO/SEO'
import Magazine from '@/components/Magazine/Magazine'

const Magazines = () => {
  return (
    <>
      <SEO
        title="testing"
        description="testing"
        keywords={[`nevoazul`, `revista`, `minimalismo`]}
      />
      <Magazine />
    </>
  )
}

export default Magazines
