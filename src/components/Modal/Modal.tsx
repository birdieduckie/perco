import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/store'
import { postRequested, postsSelectors } from '../../store/posts/postSlice'
import { CommentForm } from '../CommentForm/CommentForm'
import { Comment } from '../Comment/Comment'
import { Button } from 'shared/ui/Button/Button'

import { Container, Footer, DarkBG, ImgWrapper, Img } from './styled'
import { commentSelectors } from '../../store/comments/commentSlice'
import { selectComments } from 'store/comments/commentCustomSelectors'
import { useSearchParams } from 'react-router-dom'

interface ModalProps {
  handleClose: () => void
}

export const Modal = ({ handleClose }: ModalProps) => {
  const [searchParams, setSearchParams] = useSearchParams({ post: '' })

  const dispatch = useAppDispatch()
  const id = searchParams.get('post')

  const post = useAppSelector((state) =>
    postsSelectors.selectById(state.posts, id ?? '')
  )

  const comments = useAppSelector((state) => selectComments(state.comments, id))

  console.log(comments)

  useEffect(() => {
    if (!post && id) {
      dispatch(postRequested(id))
    }
  }, [dispatch, post])

  return (
    <>
      {post && (
        <DarkBG>
          <Container>
            <ImgWrapper>
              <Img src={post.url}></Img>
            </ImgWrapper>
            <Footer>
              <h2>{post.id}</h2>
              <h3>Комментарии:</h3>
              <CommentForm postId={post.id} />
              <Button variant="danger" onClick={handleClose}>
                X
              </Button>
              {comments?.map((comment) => <Comment>{comment.text}</Comment>)}
            </Footer>
          </Container>
        </DarkBG>
      )}
    </>
  )
}
