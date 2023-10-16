import styled, { css } from 'styled-components'

import { PicProps } from './Pic'

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 5px;
//   border: 1px solid lightgrey;
//   border-radius: 5px;
//   @media screen and (max-width: 600px) {
//     width: 100%;
//   }
// `
export const Img = styled.img<PicProps>`
  display: flex;
  object-fit: cover;
  aspect-ratio: 1/1;
  width: 150px;
  height: 150px;

  ${(p) =>
    p.variant === 'main' &&
    css`
      width: 150px;
      height: 150px;
      margin: 5px;
    `};

  ${(p) =>
    p.variant === 'modal' &&
    css`
      width: 100%;
      height: 60%;
    `};
`
