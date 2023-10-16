import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 5px;
  z-index: 10;
  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`


export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const DarkBG = styled.div`
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  overflow-y:scroll;
`

export const ImgWrapper = styled.div`
  display: flex;
  
`

export const Img = styled.img`
  display: flex;
  object-fit: fill;
  width: 100%;
  aspect-ratio: 1/1;
`