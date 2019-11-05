import React from 'react'
import ReactDOM from 'react-dom'

import * as S from './Modal.css'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: (arg: any) => void
  position: 'top' | 'bottom'
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  position,
  ...props
}) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <S.Content isOpen={isOpen} position={position}>
          <S.Modal {...props}>{children}</S.Modal>
          <S.Wrapper onClick={onClose} />
        </S.Content>
      </React.Fragment>,
      document.body
    )
  }

  return null
}

export default Modal
