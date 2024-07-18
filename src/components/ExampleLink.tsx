import { Link } from "react-router-dom";
import { GridColumn, Header, Image, Segment } from "semantic-ui-react";
import { ExampleContent } from "../types/Example";

// a clickable link holding an example icon and header
const ExampleLink = (example: ExampleContent) => (
    <GridColumn width={8}>
        <Link to={`/examples/${example.id}`} >
            <Segment secondary size='tiny' raised textAlign='center'>
                <Header as={'h3'}>
                    <Image circular src={example.icon} size='massive' />
                    {example.header}</Header>
            </Segment>
        </Link>
    </GridColumn>
)

export default ExampleLink
