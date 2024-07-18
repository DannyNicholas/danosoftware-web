import { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import { Container, Divider, Header } from "semantic-ui-react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { Thumbnails } from "yet-another-react-lightbox/plugins";
import { Photos } from "../config/Gallery";

const Gallery = () => {

    const captionsRef = useRef(null)
    const slideshowRef = useRef(null)
    const thumbnailsRef = useRef(null)
    const [index, setIndex] = useState(-1)

    return (
        <Container text>
            <Header as='h2'>Gallery</Header>
            <Divider />
            <p>
                Please click on a picture to see the drawing in more detail.
            </p>
            <PhotoAlbum layout="rows"
                photos={Photos}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                index={index}
                slides={Photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Captions, Slideshow, Thumbnails]}
                thumbnails={{ ref: thumbnailsRef }}
                captions={{ ref: captionsRef }}
                slideshow={{ ref: slideshowRef }}
            />
        </Container>
    )
}

export default Gallery
