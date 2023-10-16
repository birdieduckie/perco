import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../store/store'
import { selectComments } from 'store/comments/commentCustomSelectors'
import { postRequested, postsSelectors } from '../../store/posts/postSlice'

import { CommentForm } from '../CommentForm/CommentForm'
import { Comment } from '../Comment/Comment'
import { Pic } from '../../shared/ui/Pic/Pic'

import { Button } from 'shared/ui/Button/Button'

import { Container, Footer, Overlay } from './styled'

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

  useEffect(() => {
    if (!post && id) {
      dispatch(postRequested(id))
    }
  }, [dispatch, post])

  return (
    <>
      {post && (
        <Overlay>
          <Container>
            <Pic variant="modal" url={post.url} />
            <Footer>
              <h2>{post.id}</h2>
              <h3>Комментарии:</h3>
              <CommentForm postId={post.id} />
              {comments?.map((comment) => (
                <Comment key={comment.id}>{comment.text}</Comment>
              ))}
              <Button variant="danger" onClick={handleClose}>
                X
              </Button>
            </Footer>
          </Container>
        </Overlay>
      )}
    </>
  )
}
