import styled from 'styled-components'
import { Title as TitleStyled } from '../UI'

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.blue.default};

  width: 100%;
  height: 410px;

  padding: 4rem 10%;

  @media only screen and (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

export const Title = styled(TitleStyled)`
  margin-top: 12px;
  margin-bottom: 12px;
`

export const NewseletterContent = styled.div`
  width: 100%;
  max-width: 500px;
`

export const FormHolder = styled.form`
  margin-top: 24px;
`
