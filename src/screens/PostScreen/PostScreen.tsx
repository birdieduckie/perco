import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/store'
import { postRequested, postsSelectors } from 'store/posts/postSlice'

import { Post } from 'components/Post/Post'

import {Lightbox} from "../../shared/ui/Lightbox/Lightbox";

import { Container, Head, Screen } from './styled'

interface PostScreenProps {}

interface MyParams {
    id: string
}

export const PostScreen: FC<PostScreenProps> = () => {
    const dispatch = useAppDispatch()

    const { id } = useParams<keyof MyParams>() as MyParams

    const post = useAppSelector(state =>
        postsSelectors.selectById(state.posts, id)
    )

    useEffect(() => {
        if (!post) {
            dispatch(postRequested(id))
        }
    }, [dispatch, id, post])

    return (
        <Container>
            <Head />
            <Screen>
                <Lightbox>
                    {post ? (
                        <Post
                            id={post.id}
                            text={post.text}
                            url={post.url}
                        />
                    ) : (
                        'puk'
                    )}
                </Lightbox>
            </Screen>
        </Container>
    )
}