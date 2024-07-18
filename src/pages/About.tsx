import { Link } from "react-router-dom"
import { Container, Divider, Header } from "semantic-ui-react"

const About = () =>
(
    <Container text>
        <Header as='h2'>About Me</Header>
        <Divider />
        <p>
            I live in the beautiful Wiltshire town of Bradford on Avon with my husband,
            two children and one-eyed cat <Link to={'/examples/george'}>George</Link>, who features in my gallery of portraits.
            As well as drawing I love sewing and creating lovely things for my home.
        </p>
        <p>
            I'm never happier than when I am transforming a blank page of paper
            or a piece of fabric into something beautiful and unique.
            I enjoy country walks and bike rides with my family, spending time with friends,
            holidays by the sea and pottering in my garden.
        </p>
        <p>
            I would like to thank my wonderful husband Dan for his love,
            help, support and for setting up my website.
            Without him I'm not sure I would ever have joined the technology age!
        </p>
    </Container>
)

export default About
