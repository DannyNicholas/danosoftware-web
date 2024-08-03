import { Container, Grid, Header } from "semantic-ui-react"
import ProjectLink from "../components/pages/PageLink"
import { Projects } from "../config/Projects"
import { PROJECTS_ROUTE } from "../constants/Constants"

const ProjectSummary = () => (
    <>
        <Container>
            <Header as='h3'>My Projects</Header>
            <p>
                Here are some Projects projects
            </p>
            <p>
                Click on each project to dig a little deeper.
            </p>
            <Grid stackable>
                {Projects
                    .sort((a, b) => a.header.localeCompare(b.header))
                    .map(
                        (item, index) => (
                            <ProjectLink content={{ ...item }} url={`${PROJECTS_ROUTE}/${item.id}`} key={index} />
                        )
                    )}
            </Grid >
        </Container >
    </>
)

export default ProjectSummary
