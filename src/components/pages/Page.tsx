import { Container, Header } from "semantic-ui-react"
import { BulletsContent, ButtonContent, ContentType, HeaderContent, ImageContent, PageContent, PrivacyPolicyButtonContent, TextContent } from "../../types/Content"
import BulletsComponent from "./BulletsComponent"
import ButtonComponent from "./ButtonComponent"
import HeaderComponent from "./HeaderComponent"
import ImageComponent from "./ImageComponent"
import PrivacyButtonComponent from "./PrivacyButtonComponent"
import TextComponent from "./TextComponent"

const Page = ({ content }: { content: PageContent }) => (
    <>
        <Container>
            <Header as='h3'>{content.header}</Header>
            {content.structure.map(
                (item, index) => {
                    if (item.type === ContentType.Header) {
                        const header: HeaderContent = item as HeaderContent
                        return <HeaderComponent header={header} key={index} />
                    }
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
                    if (item.type === ContentType.Bullets) {
                        const bullets: BulletsContent = item as BulletsContent
                        return <BulletsComponent bullets={bullets} key={index} />
                    }
                }
            )}
        </Container>
    </>
)

export default Page
