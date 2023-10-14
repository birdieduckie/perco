import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
  border: 1px solid lightgrey;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`