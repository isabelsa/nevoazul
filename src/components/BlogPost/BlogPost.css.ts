import styled from 'styled-components'

import * as UI from '../UI/index'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1440px;
`

export const Post = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1170px;

  margin-top: 200px;

  @media only screen and (max-width: 768px) {
    margin-top: 80px;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
  }
`

export const PostIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 800px;

  text-align: center;

  z-index: 999;

  @media only screen and (max-width: 768px) {
    padding: 40px;
  }

  @media only screen and (max-width: 425px) {
    padding: 20px;
  }
`

export const PostTags = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
  margin-bottom: 16px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const PostImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  display: block;

  width: 100%;
  max-width: 980px;
  height: 490px;

  margin-top: -30px;

  @media only screen and (max-width: 768px) {
    padding: 40px;
    height: 300px;

    margin-top: 0px;
  }

  @media only screen and (max-width: 550px) {
    padding: 20px;
    height: 200px;
  }
`

export const PostDetail = styled(UI.Kicker)`
  margin-bottom: 4px;
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 680px;

  margin-top: 120px;

  @media only screen and (max-width: 425px) {
    margin-top: 0px;
  }
`

export const Body = styled.div`
  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 17px;
    line-height: 30px;

    margin-bottom: 32px;
  }

  span {
    font-family: 'Untitled Sans', sans-serif;
    font-size: 18px;
    line-height: 27px;

    margin-bottom: 20px;
  }

  sup {
    font-size: 12px;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 28px;

    margin-top: 80px;
    margin-bottom: 32px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 800;
    font-size: 20px;

    margin-top: 80px;
    margin-bottom: 32px;
  }

  a{
    display: inline;
    text-decoration: underline;
    opacity: 60%;

    &:hover {
      opacity: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 40px;
  }

  @media only screen and (max-width: 425px) {
    padding: 20px;
  }
`
