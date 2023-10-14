import { FC } from 'react'

import { Container, Text } from './styled'

interface CommentProps {
  id: string
  text: string
  publishDate: string
  author: string
}

export const Comment = ({ text }: CommentProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}
