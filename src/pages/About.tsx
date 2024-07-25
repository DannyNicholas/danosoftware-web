import { Container, Divider, Grid, Header, Image } from "semantic-ui-react"
import Me from "../assets/me/me.png"

const About = () => {
    const LeftImage = () => (
        <Image
            floated='left'
            size='medium'
            src={Me}
        />
    )



    return (


        < Container text >
            <Header as='h2'>About Me</Header>
            <Divider />
            <LeftImage />
            <p>
                Hello there... I'm Danny. I live in the beautiful Wiltshire town of Bradford on Avon with my gorgeous wife Mel,
                two cheeky kids and multiple cats.
            </p>


            <Grid>
                <Grid.Column width={12}>
                    <p>
                        Hello there... I'm Danny. I live in the beautiful Wiltshire town of Bradford on Avon with my gorgeous wife Mel,
                        two cheeky kids and multiple cats.
                    </p>
                    <p>
                        Hello there... I'm Danny. I live in the beautiful Wiltshire town of Bradford on Avon with my gorgeous wife Mel,
                        two cheeky kids and multiple cats.
                    </p>
                    <p>
                        Hello there... I'm Danny. I live in the beautiful Wiltshire town of Bradford on Avon with my gorgeous wife Mel,
                        two cheeky kids and multiple cats.
                    </p>
                </Grid.Column>
                <Grid.Column floated='right' width={4}>
                    <Image circular size='medium' src={Me} />
                </Grid.Column>
            </Grid>

            <p>
                I started out in mobile telecoms after graduating in Electronic
            </p>
            <p>
                I would like to thank my wonderful husband Dan for his love,
                help, support and for setting up my website.
                Without him I'm not sure I would ever have joined the technology age!
            </p>
        </Container >
    )
}

export default About
