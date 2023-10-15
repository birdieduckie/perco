import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { postRequested, postsSelectors } from "../../../store/posts/postSlice";
import { Comment } from "../../../components/Comment/Comment";
import { Button } from 'shared/ui/Button/Button'

import {Container, Footer, DarkBG, ImgWrapper, Img} from './styled'
import { commentSelectors } from "../../../store/comments/commentSlice";

interface ModalProps {
  params: URLSearchParams
  handleClose: () => void
}

export const Modal = ({ params, handleClose }: ModalProps) => {
  const dispatch = useAppDispatch()
  const id = params.get('post')
  console.log(params)
  const post = useAppSelector(state => id && postsSelectors.selectById(state.posts, id))
  console.log(post)
  useEffect(() => {
    console.log(id)
    if (!post && id) {
      dispatch(postRequested(id))
    }}, [])

  return (
    <>
      {post &&
        <DarkBG>
          <Container>
            <ImgWrapper>
              <Img src={post.url}></Img>
            </ImgWrapper>
            <Footer>
              <h2>{post.id}</h2>
              <Comment postId={post.id} />
              <Button variant='danger' onClick={handleClose}>X</Button>
            </Footer>
          </Container>
        </DarkBG>}
    </>
  )
}