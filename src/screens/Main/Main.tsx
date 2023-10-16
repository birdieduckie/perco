import React, { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/store'
import { postsSelectors, postsRequested } from 'store/posts/postSlice'

import { Modal } from '../../components/Modal/Modal'
import { Pic } from 'shared/ui/Pic/Pic'

import { Container, Items, Head } from './styled'

interface MainProps {}

export const Main: FC<MainProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({ post: '' })
  const [isOpen, setIsOpen] = useState(false)

  const onOpenModal = (id: string) => {
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.set('post', id)
    setSearchParams(nextSearchParams)
    setIsOpen((prevState) => !prevState)
  }

  const onCloseModal = () => {
    const nextSearchParams = new URLSearchParams(searchParams)
    nextSearchParams.delete('post')
    setSearchParams(nextSearchParams)
    setIsOpen((prevState) => !prevState)
  }

  const dispatch = useAppDispatch()

  const posts = useAppSelector((state) => postsSelectors.selectAll(state.posts))

  useEffect(() => {
    if (!posts.length) {
      console.log('requesting')
      dispatch(postsRequested())
    }
  }, [dispatch, posts])

  return (
    <>
      <Container>
        <Head>Cats' Photos</Head>
        {isOpen && <Modal handleClose={onCloseModal} />}
        <Items>
          {posts?.map((item) => (
            <div key={item.id} onClick={() => onOpenModal(item.id)}>
              <Pic variant="main" url={item.url} />
            </div>
          ))}
        </Items>
      </Container>
    </>
  )
}
