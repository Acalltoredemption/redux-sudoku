import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  `}
`
