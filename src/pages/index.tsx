import React from 'react'

import Hero from '@/components/Homepage/Hero/Hero'

import SEO from '@/components/SEO/SEO'
import { Detail, Modal, Input, Title } from '../components/UI/index'

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  React.useEffect(() => {
    setIsModalOpen(true)
  }, [])

  return (
    <>
      <SEO keywords={[`nevoazul`, `revista`, `minimalismo`]} />
      <Hero />
      <Modal
        isOpen={isModalOpen}
        onClose={modal => setIsModalOpen(!modal)}
        position="bottom"
      >
        <Detail>No próximo número</Detail>
        <Title>Junta-te à conversa.</Title>
        <Input placeholder="Subscreve" label="subscreve" />
      </Modal>
    </>
  )
}

export default IndexPage
