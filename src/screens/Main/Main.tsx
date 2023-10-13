import { FC, useEffect } from 'react'

import { Post } from 'components/Post/Post'

import { Container, Head, Items } from './styled'
import { useAppDispatch, useAppSelector } from 'store/store'
import { postsSelectors, postsRequested } from 'store/posts/postSlice'

interface MainProps {}

export const Main: FC<MainProps> = () => {
    const dispatch = useAppDispatch()

    const posts = useAppSelector(state => postsSelectors.selectAll(state.posts))

    useEffect(() => {
        console.log(posts)
        if (!posts.length) {
            console.log('requesting')
            dispatch(postsRequested())
        }
    }, [dispatch, posts])

    return (
        <Container>
            <Items>
                {posts && posts.map(item => <Post
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  url={item.url}
                />)}
            </Items>
        </Container>
    )
}