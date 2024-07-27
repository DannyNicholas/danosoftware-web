import { Divider, Grid, Header } from "semantic-ui-react"
import { ButtonContent, ContentType, ImageContent, PageContent, PrivacyPolicyButtonContent, TextContent } from "../../types/Content"
import ButtonComponent from "./ButtonComponent"
import ImageComponent from "./ImageComponent"
import PrivacyButtonComponent from "./PrivacyButtonComponent"
import TextComponent from "./TextComponent"

const Page = ({ content }: { content: PageContent }) => (
    <>
        <Header as='h2'>{content.header}</Header>
        <Divider />
        <Grid verticalAlign='middle' stackable >
            {content.structure.map(
                (item, index) => {
                    if (item.type === ContentType.Text) {
                        const text: TextContent = item as TextContent
                        return <TextComponent text={text} key={index} />
                    }
                    if (item.type === ContentType.Image) {
                        const image: ImageContent = item as ImageContent
                        return <ImageComponent image={image} key={index} />
                    }
                    if (item.type === ContentType.Button) {
                        const button: ButtonContent = item as ButtonContent
                        return <ButtonComponent button={button} key={index} />
                    }
                    if (item.type === ContentType.PrivacyPolicyButton) {
                        const button: PrivacyPolicyButtonContent = item as PrivacyPolicyButtonContent
                        return <PrivacyButtonComponent id={content.id} button={button} key={index} />
                    }
                }
            )}
        </Grid>
    </>
)

export default Page
