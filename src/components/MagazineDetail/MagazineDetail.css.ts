import styled, { css } from 'styled-components'

export const MagazineDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`

export const DetailGallery = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  padding: 0;
  margin: 0;

  height: 100vh;
  width: 50%;

  background-color: ${({ theme }) => theme.colors.greyscale.light};
`

export const DetailInformation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 50%;
`

// Controls

export const baseControls = css`
  cursor: pointer;

  bottom: 10px;
  left: 20px;

  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`

export const Prev = styled.div`
  ${baseControls}

  transform: scale(-1);
`

export const Next = styled.div`
  ${baseControls}

  left: 60px;
`
