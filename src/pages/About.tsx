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
            style={{ padding: '0.5em' }}
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
                Hello there... I'm Danny. I was born and bred in that London but now
                live in the beautiul county of Wiltshire.
            </p>
            <p>
                I've been coding in some form or another since I was 11.
                I started by copying and adapting other people's games before starting to
                dabble with my own ideas.
            </p>
            <p>
                It all started on an Acorn Electron in 1983. I wrote games, simulations
                and a school dating agency app (that's a story for another day).
            </p>
            <p>
                After many years of selling my soul to the telecommunications industry, I came back to
                software development after studying Java with the Open University.
            </p>
            <p>
                I now work for a software consultancy in Bristol and haven't looked back...
            </p>
        </Container >
    )
}

export default About
