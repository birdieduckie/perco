import React, { FC, useEffect, useState } from 'react'

import { Post } from 'components/Post/Post'

import { Container, Items } from './styled'
import { useAppDispatch, useAppSelector } from 'store/store'
import { postsSelectors, postsRequested, postRequested } from "store/posts/postSlice";
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
      setIsOpen(prevState => !prevState)
    }




    const onCloseModal = () => {
      const nextSearchParams = new URLSearchParams(searchParams)
      nextSearchParams.delete('post')
      setSearchParams(nextSearchParams)
      setIsOpen(prevState => !prevState)
  }

  const dispatch = useAppDispatch()
  const id = searchParams.get('post')

  const posts = useAppSelector((state) => postsSelectors.selectAll(state.posts))

  useEffect(() => {
    if (!posts.length) {
      console.log('requesting')
      dispatch(postsRequested())
    } if (id) {
      setIsOpen(true)
      console.log(isOpen)
    }

  }, [dispatch, posts, id])

  return (
    <>
      <Container>
        {isOpen && <Modal params={searchParams} handleClose={onCloseModal}></Modal>}
        <Items>
          {posts &&
            posts.map((item) => (
              <div key={item.id} onClick={() => onOpenModal(item.id)}>
              <Post
                url={item.url}
              />
              </div>
            ))}
        </Items>
      </Container>
    </>
  )
}
