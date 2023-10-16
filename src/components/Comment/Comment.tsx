import { Container, Text } from './styled'

interface CommentProps {
  children: string
}

export const Comment = ({ children }: CommentProps) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}
