import { GridColumn, GridRow, Image, Label } from "semantic-ui-react"
import { ImageContent } from "../../types/Content"

const ImageComponent = ({ image }: { image: ImageContent }) => (
    <GridRow>
        <GridColumn width={16} textAlign='left'>
            <Image src={image.image} fluid />
            <Label>{image.caption}</Label>
        </GridColumn>
    </GridRow>
)

export default ImageComponent