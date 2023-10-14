import { useState } from 'react'

import {Container} from "./styled";

export const Lightbox = () => {
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)
    const [imageToShow, setImageToShow] = useState('')

    return (
        <>
        {lightboxDisplay ?
                <Container>
                    <img src='imageToShow'></img>
                </Container> :
                <div>Пусто!</div>}
        </>
    )

}