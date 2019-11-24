import React from 'react'
import ReactDOM from 'react-dom'

import { motion, AnimatePresence } from 'framer-motion'

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
          <AnimatePresence>
            {isOpen && (
              <S.Modal
                {...props}
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </S.Modal>
            )}

            <S.Wrapper
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
          </AnimatePresence>
        </S.Content>
      </React.Fragment>,
      document.body
    )
  }

  return null
}

export default Modal
