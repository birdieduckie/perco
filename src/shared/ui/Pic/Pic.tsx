import { Img } from './styled'

export interface PicProps {
  variant?: string
  url?: string
}

export const Pic = ({ url, variant }: PicProps) => {
  return <Img variant={variant} src={url}></Img>
}
