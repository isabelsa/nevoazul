import styled from 'styled-components'

export const Holder = styled.div`
  display: inline-block;
  position: relative;
`

export const TitleLink = styled.p`
  cursor: pointer;

  &::before {
    content: '';
    height: 1px;
    width: 0;
    background-color: ${({ theme }) => theme.colors.blue.default};
    position: absolute;
    bottom: -2px;
    left: 0px;

    transition: ${({ theme }) => theme.transitions.cubic()};
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`
