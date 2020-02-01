import styled from 'styled-components'

import * as UI from '../../UI/index'

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 8rem;
  right: 0rem;

  @media only screen and (max-width: 1200px) {
    position: relative;

    top: 0;
    right: 0;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const GalleryHolder = styled.div`
  position: relative;
`

export const Gallery = styled.div`
  position: relative;
  top: 0;
  right: 0;

  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 0;
  margin: 0;

  height: 38rem;
  width: 25rem;

  background-color: ${({ theme }) => theme.colors.greyscale.light};
`

export const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 50vw;
`

export const GalleryControls = styled(UI.Flex)`
  align-items: center;
  justify-content: space-between;

  top: 630px;
  right: 0;

  margin-top: 16px;

  svg {
    cursor: pointer;
    margin-right: 24px;
  }
`
