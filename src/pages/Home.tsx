import { useNavigate } from "react-router-dom"
import { Button, Divider, Grid, Header, Image, Segment } from "semantic-ui-react"
import Icon from "../assets/projects/pluto-panic/icon.png"
import { PROJECTS_ROUTE } from "../constants/Constants"

const Home = () => {

    const navigate = useNavigate()

    return (
        <>
            <Segment vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Welcome to Dano Software
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Hi, I'm Danny, a software developer.
                                I've created a website with my projects and stuff.
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                What kind of stuff do you do?
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                I like to dabble with anything that involves brackets or semi-colons.
                                This website is a place to share some of my projects.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={Icon} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    <a href='#'>Projects</a>
                </Divider>

                <Header as='h3' style={{ fontSize: '2em' }}>
                    Shall we look at some projects?
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Why not take a look at some of my projects...
                    what's the worst that could happen?
                </p>
                <Button as='a' size='large' onClick={() => navigate(`${PROJECTS_ROUTE}`)}>
                    Let's go...
                </Button>
            </Segment >
        </>
    )
}

export default Home
