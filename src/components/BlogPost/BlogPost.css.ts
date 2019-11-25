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
`

export const PostIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 800px;

  text-align: center;

  z-index: 999;
`

export const PostTags = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const Tags = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
  margin-bottom: 16px;
`

export const PostImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue.default};

  width: 100%;
  max-width: 980px;
  height: 490px;

  margin-top: -30px;
`

export const PostDetail = styled(UI.Detail)`
  margin-bottom: 4px;
`

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 680px;

  margin-top: 120px;
`
