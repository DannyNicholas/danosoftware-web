import { Link } from "react-router-dom";
import { GridColumn, Header, Image, Segment } from "semantic-ui-react";
import { PROJECTS_ROUTE } from "../constants/Constants";
import { ProjectContent } from "../types/Project";

// a clickable link holding a project icon and header
const ProjectLink = (example: ProjectContent) => (
    <GridColumn width={8}>
        <Link to={`${PROJECTS_ROUTE}/${example.id}`} >
            <Segment secondary size='tiny' raised textAlign='center'>
                <Header as={'h3'}>
                    <Image circular src={example.icon} size='massive' />
                    {example.header}</Header>
            </Segment>
        </Link>
    </GridColumn>
)

export default ProjectLink
