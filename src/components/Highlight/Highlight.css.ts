import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const HighlightPicture = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.default};
  width: 55%;
  height: 40rem;

  position: relative;
`

export const HighlightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 45%;

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  text-align: center;
`

export const Picture = styled.div`
  background-color: ${({ theme }) => theme.colors.brown.default};
  background-image: url('https://images.unsplash.com/photo-1550879845-53ec691be605?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80');
  background-size: cover;
  width: 74%;
  height: 36rem;

  position: absolute;
  left: 18%;
  bottom: -1.5rem;
`

export const Holder = styled.div`
  max-width: 70%;
`
