import { FC } from 'react'

import { Container, Img, ImgWrapper } from './styled'

interface PostProps {
  id: string
  text: string
  url: string
}

export const Post: FC<PostProps> = ({ id, text, url }) => {
  return (
    <Container >
      <ImgWrapper>
        <Img src={url}></Img>
      </ImgWrapper>
    </Container>
  )
}
