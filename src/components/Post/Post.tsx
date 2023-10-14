import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../store/store'
import { postRequested } from '../../store/posts/postSlice'
import { Comment } from '../Comment/Comment'

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
      {/*<Likes>*/}
      {/*    <Button variant='like' onClick={handleClick} />*/}
      {/*</Likes>*/}
      {/*<Body>*/}

      {/*    {text}*/}
      {/*</Body>*/}
    </Container>
  )
}
