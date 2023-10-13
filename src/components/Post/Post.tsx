import { FC, useEffect, useState } from 'react'


import { Comment } from '../Comment/Comment'
import { Button } from 'shared/ui/Button/Button'


import { Container, Head, Likes, Img, Body, ImgWrapper } from './styled'


interface PostProps {
    id: string
    text: string
    url: string
}

export const Post: FC<PostProps> = ({ id, text, url }) => {
    const handleClick = () => {
        console.log('like!')
    }
    return (
        <Container>
            <Head />
            <ImgWrapper>
                <Img src={url}></Img>
            </ImgWrapper>
            <Likes>
                <Button variant='like' onClick={handleClick} />
            </Likes>
            <Body>

                {text}
            </Body>

        </Container>
    )
}