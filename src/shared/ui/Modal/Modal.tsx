
import { useAppSelector } from "../../../store/store";
import { postsSelectors } from "../../../store/posts/postSlice";
import { Button } from 'shared/ui/Button/Button'

import {Container, Header, Footer, DarkBG, ImgWrapper, Img} from './styled'


interface ModalProps {
  params: URLSearchParams
  handleClose: () => void
}

export const Modal = ({ params, handleClose }: ModalProps) => {
  const id = params.get('post')
  const post = useAppSelector(state => id && postsSelectors.selectById(state.posts, id))

  return (
    <>
    {post ? <DarkBG>
        <Container>
          <Header />
             <ImgWrapper>
                 <Img src={post.url}></Img>
             </ImgWrapper>
          <Footer>
            <Button variant='danger' onClick={handleClose}>X</Button>
          </Footer>
        </Container>
        </DarkBG> : <div>Ой! Кажется, что-то сломалось...</div>
    }
    </>
  )
}