import { Button } from 'shared/ui/Button/Button'

import {Container, Header, Footer} from './styled'

interface ModalProps {
  setIsOpen: (b: boolean) => void
}

export const Modal = ({ setIsOpen }: ModalProps) => {

  return (
    <Container>
      <Header />
      <Footer>
        <Button variant='danger' onClick={() => setIsOpen(false)}>X</Button>
      </Footer>
    </Container>
  )

}