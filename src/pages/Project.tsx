import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Grid, Header } from "semantic-ui-react"
import Page from "../components/pages/Page"
import PageLink from "../components/pages/PageLink"
import { Projects } from "../config/Projects"
import { PROJECTS_ROUTE } from "../constants/Constants"
import { PageContent } from "../types/Content"

const Project = () => {

    // ensure we scroll to top of page when opening a new Project page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    const { id } = useParams()

    // extract content for chosen Project page
    // throw an error if user has navigated to an unrecognised Project
    const content: PageContent | undefined = Projects.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Project '${id}' not found.`)
    }

    const showOtherProjects: boolean = Projects.length > 1

    return (
        <>
            <Container>

                <Page content={content} />

                {showOtherProjects && <>
                    <Header as='h3'>Other Projects</Header>
                    <p>Click below to see other Projects of my work</p>
                    {/* show a sorted list of other Project pages excluding the current page */}
                    <Grid stackable>
                        {Projects
                            .filter(item => item.id !== content.id)
                            .sort((a, b) => a.header.localeCompare(b.header))
                            .map(
                                (item, index) => (
                                    <PageLink content={{ ...item }} url={`${PROJECTS_ROUTE}/${item.id}`} key={index} />
                                )
                            )}
                    </Grid>
                </>
                }
            </Container>
        </>
    )
}

export default Project
