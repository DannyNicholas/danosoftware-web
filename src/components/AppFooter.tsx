import { Container, Divider, Grid, Header, Icon, Image, List, Segment } from "semantic-ui-react"
import FooterImage from '../assets/me/me.png'
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppFooter = () => {

  const desktopStyle = {
    margin: '5em 0em 0em',
    padding: '2em 0em'
  }

  const mobileStyle = {
    margin: '1em 0em 0em'
  }

  const mobileDividerStyle = {
    marginTop: '1em',
    marginBottom: '1em'
  }

  const FormattedFooter = ({ media }: MediaProps) => {
    const isMobile: boolean = media === MediaType.Mobile
    return (
      <>
        <Segment inverted style={isMobile ? mobileStyle : desktopStyle} vertical>
          <Container textAlign='center'>

            <Grid verticalAlign='middle' divided inverted >
              <Grid.Column width={8} textAlign='center'>
                <Image circular size={isMobile ? 'mini' : 'tiny'} src={FooterImage} floated='right' />
              </Grid.Column>
              <Grid.Column width={8} textAlign='left'>
                <Header as={isMobile ? 'h5' : 'h4'} inverted>
                  Dano Software
                </Header>
              </Grid.Column>
            </Grid>

            <Divider inverted section style={isMobile ? mobileDividerStyle : {}} />

            <List horizontal inverted divided link size='medium'>
              <List.Item as='a' target='_blank' rel='noopener noreferrer' href='mailto:dan%40danosoftware.com?Subject=Hello%20there'>
                <Icon name='mail' />
                E-Mail
              </List.Item>
              <List.Item as='a' target='_blank' rel='noopener noreferrer' href='https://twitter.com/danosworld72'>
                <Icon name='twitter' />
                Twitter
              </List.Item>
            </List>
          </Container>
        </Segment>
      </>
    )
  }

  return (
    <>
      <Media greaterThan='mobile'>
        <FormattedFooter media={MediaType.Desktop} />
      </Media>
      <Media at='mobile'>
        <FormattedFooter media={MediaType.Mobile} />
      </Media>
    </>
  )
}

export default AppFooter
