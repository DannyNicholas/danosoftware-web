import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Divider, Grid, GridColumn, GridRow, Header, Image, Label } from "semantic-ui-react"
import { PrivacyPolicies } from "../config/PrivacyPolicies"
import { HOME_ROUTE, PROJECTS_ROUTE } from "../constants/Constants"
import { ButtonContent, ContentType, ImageContent, PageContent, TextContent } from "../types/Content"

const PrivacyPolicy = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    // extract content for chosen PrivacyPolicy page
    // throw an error if user has navigated to an unrecognised PrivacyPolicy
    const content: PageContent | undefined = PrivacyPolicies.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Privacy Policy '${id}' not found.`)
    }

    // create a back button to go back to the equivalent project page
    const backButton: ButtonContent = {
        type: ContentType.Button,
        caption: 'Back ...',
        url: id === undefined ? `${HOME_ROUTE}` : `${PROJECTS_ROUTE}/${id}`
    }

    const ImageComponent = ({ image }: { image: ImageContent }) => {
        return (
            <GridRow>
                <GridColumn width={16} textAlign='left'>
                    <Image src={image.image} fluid />
                    <Label>{image.caption}</Label>
                </GridColumn>
            </GridRow>
        )
    }

    const TextComponent = ({ text }: { text: TextContent }) => {
        return (
            <GridRow>
                <GridColumn width={16} textAlign='left'>
                    <p>
                        {text.quote ? <i>{text.text}</i> : text.text}
                    </p>
                </GridColumn>
            </GridRow>
        )
    }

    const ButtonComponent = ({ button }: { button: ButtonContent }) => {
        return (
            <GridRow>
                <GridColumn width={16} textAlign='center'>
                    <Button as='a' size='large' onClick={() => navigate(button.url)}>
                        {button.caption}
                    </Button>
                </GridColumn>
            </GridRow>
        )
    }

    return (
        <>
            <Container text>
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
                        }
                    )}
                    <ButtonComponent button={backButton} />
                </Grid>
            </Container>
        </>
    )
}

export default PrivacyPolicy
