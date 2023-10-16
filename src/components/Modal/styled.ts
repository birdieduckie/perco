import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  height: 90%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 7px;
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

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  overflow-y: scroll;
`
