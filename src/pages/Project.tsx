import { useLayoutEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Divider, Grid, GridColumn, GridRow, Header, Image, Label } from "semantic-ui-react"
import ProjectLink from "../components/PageLink"
import { Projects } from "../config/Projects"
import { PROJECTS_ROUTE } from "../constants/Constants"
import { ButtonContent, ContentType, ImageContent, PageContent, TextContent } from "../types/Content"

const Project = () => {

    // ensure we scroll to top of page when opening a new Project page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    const { id } = useParams()
    const navigate = useNavigate()

    // extract content for chosen Project page
    // throw an error if user has navigated to an unrecognised Project
    const content: PageContent | undefined = Projects.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Project '${id}' not found.`)
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
                </Grid>
                <Header as='h2'>Other Projects</Header>
                <Divider />
                <p>Click below to see other Projects of my work</p>
                {/* show a sorted list of other Project pages excluding the current page */}
                <Grid stackable>
                    {Projects
                        .filter(item => item.id !== content.id)
                        .sort((a, b) => a.header.localeCompare(b.header))
                        .map(
                            (item, index) => (
                                <ProjectLink content={{ ...item }} url={`${PROJECTS_ROUTE}/${item.id}`} key={index} />
                            )
                        )}
                </Grid>
            </Container>
        </>
    )
}

export default Project
