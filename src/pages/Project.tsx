import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Divider, Grid, GridColumn, GridRow, Header, Image, Label } from "semantic-ui-react"
import ProjectLink from "../components/ProjectLink"
import { Projects } from "../config/Projects"
import { ContentType, ImageContent, ProjectContent, TextContent } from "../types/Project"

const Project = () => {

    // ensure we scroll to top of page when opening a new Project page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    const { id } = useParams()

    // extract content for chosen Project page
    // throw an error if user has navigated to an unrecognised Project
    const content: ProjectContent | undefined = Projects.find(item => item.id === id)
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
                                <ProjectLink {...item} key={index} />
                            )
                        )}
                </Grid>
            </Container>
        </>
    )
}

export default Project
