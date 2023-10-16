import { FC } from 'react'

import { Container, Img, ImgWrapper } from './styled'

interface PostProps {
  url: string
}

export const Post: FC<PostProps> = ({ url }) => {
  return (
    <Container>
      <ImgWrapper>
        <Img src={url}></Img>
      </ImgWrapper>
    </Container>
  )
}
