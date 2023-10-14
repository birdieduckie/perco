import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/store'
import { postRequested, postsSelectors } from 'store/posts/postSlice'

import { Post } from 'components/Post/Post'

import { Button } from 'shared/ui/Button/Button'

import { Container, Head, Screen } from './styled'

interface PostScreenProps {
  id: string

}

export const PostScreen = ({id} : PostScreenProps) => {
  const dispatch = useAppDispatch()


  const post = useAppSelector((state) =>
    postsSelectors.selectById(state.posts, id)
  )

  useEffect(() => {
    if (!post) {
      console.log('requesting post')
      dispatch(postRequested(id))
    }
  }, [post])

  return (
    <Container>
      <Head />
      <Screen>
        {post ?
          <>
          <Post id={post.id} text={post.text} url={post.url} />
          </>: 'puk'}
      </Screen>
    </Container>
  )
}
