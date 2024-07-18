import { Container, Divider, Grid, Header } from "semantic-ui-react"
import ExampleLink from "../components/ExampleLink"
import { Examples } from "../config/Examples"

const ExampleSummary = () => (
    <>
        <Container text>
            <Header as='h2'>Example Portraits</Header>
            <Divider />
            <p>
                Here are some examples of my portraits including the original photos that I worked from.
                Ideally I work from one photo but sometimes I have used more than one photo to complete a drawing.
            </p>
            <p>
                Click on each pet to see the portraits and the original photos.
            </p>
            <Grid stackable>
                {Examples
                    .sort((a, b) => a.header.localeCompare(b.header))
                    .map(
                        (item, index) => (
                            <ExampleLink {...item} key={index} />
                        )
                    )}
            </Grid >
        </Container >
    </>
)

export default ExampleSummary
