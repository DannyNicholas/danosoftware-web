import { Link } from "react-router-dom"
import { Container, Divider, Grid, GridColumn, GridRow, Header, Image, Label } from "semantic-ui-react"
import Merlin from "../assets/pets/merlin/merlin-1024.jpg"
import Mitzy from "../assets/pets/mitzy/mitzy-1024.jpg"
import Tommy from "../assets/pets/tommy/tommy-1024.jpg"

const Home = () => (
    <Container text >
        <Header as='h2'>Home</Header>
        <Divider />

        <Grid verticalAlign='middle' stackable >
            <GridRow>
                <GridColumn width={8} textAlign='left'>
                    <Image src={Merlin} fluid />
                    <Label>Merlin</Label>
                </GridColumn>
                <GridColumn width={8}>
                    <p>
                        Welcome to my website.
                    </p>
                    <p>
                        I am an animal portrait artist who completed Merlin, my <Link to={'/examples/merlin'}>first drawing</Link>,
                        22 years ago.  All my portraits are completed using pencil for a beautifully detailed drawing.
                    </p>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={8}>
                    <p>
                        I love being able to capture the unique character of each animal I draw, from the texture of the fur to the detail of the eyes and nose.
                    </p>
                    <p>
                        It's very rewarding to be able to make a plain piece of paper come to life.
                        But the most satisfying aspect of what I do is hearing from my happy customers and knowing I have created something very special for them.
                    </p>
                </GridColumn>
                <GridColumn width={8} textAlign='left'>
                    <Image src={Mitzy} fluid />
                    <Label>Mitzy</Label>
                </GridColumn>
            </GridRow>
            <GridRow>
                <GridColumn width={8} textAlign='left'>
                    <Image src={Tommy} fluid />
                    <Label>Tommy</Label>
                </GridColumn>
                <GridColumn width={8}>
                    <Header as='h3'>Customer Reviews</Header>
                    <p>
                        <i>"We gave the portrait to Mollie's owners this week and they were absolutely delighted, with tears in their eyes … so many many many thanks for a great drawing."</i>
                    </p>
                    <p>
                        <i>"Thank you very much for the portrait of Tommy, it has had lots of admirers."</i>
                    </p>
                    <p>
                        <i>"We absolutely love the drawing of Soldus. You captured her beautiful brown eyes perfectly."</i>
                    </p>
                </GridColumn>
            </GridRow>
        </Grid>
    </Container >
)

export default Home
