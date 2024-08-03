import { Container, Header, Image, SemanticSIZES } from "semantic-ui-react"
import Me from "../assets/me/me.png"
import { Media } from "../components/Media"

export interface ImageProps {
    size: SemanticSIZES
}

const About = () => {
    const LeftImage = ({ size }: ImageProps) => (
        <Image
            circular
            floated='left'
            size={size}
            src={Me}
        />
    )



    return (


        <Container>
            <Header as='h3'>About Me</Header>
            <Media greaterThan='mobile'>
                <LeftImage size={'medium'} />
            </Media>
            <Media at='mobile'>
                <LeftImage size={'small'} />
            </Media>
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
            <p>
                Hello there... I'm Danny. I live in the beautiful Wiltshire town of Bradford on Avon with my gorgeous wife Mel,
                two cheeky kids and multiple cats.
            </p>
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
