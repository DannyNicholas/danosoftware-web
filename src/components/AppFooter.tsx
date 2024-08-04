import { Container, Divider, Grid, GridColumn, Header, Icon, Image, List, Segment } from "semantic-ui-react"
import FooterImage from '../assets/projects/pluto-panic/icon.png'
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppFooter = () => {

  const desktopStyle = {
    margin: '5em 0em 0em',
    padding: '3em 0em'
  }

  const mobileStyle = {
    margin: '2em 0em 0em'
  }

  const FormattedFooter = ({ media }: MediaProps) => {
    const isMobile: boolean = media === MediaType.Mobile
    return (
      <>
        <Segment inverted style={isMobile ? mobileStyle : desktopStyle} vertical>
          <Container textAlign='center'>
            <Grid verticalAlign='middle' stackable divided={isMobile ? undefined : true} inverted padded >
              <GridColumn width={16} textAlign={'center'}>
                <Header as={isMobile ? 'h5' : 'h4'} inverted>
                  <Image circular src={FooterImage} />Dano Software
                </Header>
              </GridColumn>
            </Grid>
            <Divider inverted section />
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
