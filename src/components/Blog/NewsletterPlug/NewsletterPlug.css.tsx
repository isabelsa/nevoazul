import styled from 'styled-components'
import * as UI from '../../UI/index'

export const NewsletterPlug = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 0% 10% 6% 10%;
`
export const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  margin-right: 10%;
`

export const Title = styled(UI.Title)`
  margin-bottom: 1rem;
`

export const Text = styled(UI.Text)`
  margin-bottom: 1rem;
`
