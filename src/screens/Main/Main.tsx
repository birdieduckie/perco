import { FC, useEffect, useState } from 'react'

import { Post } from 'components/Post/Post'

import { Container, Items } from './styled'
import { useAppDispatch, useAppSelector } from 'store/store'
import { postsSelectors, postsRequested } from 'store/posts/postSlice'
import { useSearchParams } from "react-router-dom";

import { Modal } from "../../shared/ui/Modal/Modal";

interface MainProps {}

export const Main: FC<MainProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({ post: '' })
  const [isOpen, setIsOpen] = useState(false)

    const onOpenModal = (id: string) => {
        const nextSearchParams = new URLSearchParams(searchParams)
        nextSearchParams.set('post', id)
        setSearchParams(nextSearchParams)
    }


    const onCloseModal = () => {
      const nextSearchParams = new URLSearchParams(searchParams)
      nextSearchParams.delete('post')
      setSearchParams(nextSearchParams)
  }

  const id = searchParams.get('post')

  const handleOpenModal = () => setIsOpen(prevState => !prevState)
  const dispatch = useAppDispatch()

  const posts = useAppSelector((state) => postsSelectors.selectAll(state.posts))

  useEffect(() => {
    console.log(posts)
    if (!posts.length) {
      console.log('requesting')
      dispatch(postsRequested())
    }
  }, [dispatch, posts])

  return (
    <>
      <Container>
        {isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
        <Items>
          {posts &&
            posts.map((item) => (
              <div onClick={handleOpenModal}>
              <Post
                key={item.id}
                id={item.id}
                text={item.text}
                url={item.url}
              />
              </div>
            ))}
        </Items>
      </Container>
    </>
  )
}
