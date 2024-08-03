import { Container, Divider, Header, HeaderSubheader } from "semantic-ui-react"
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppTitle = () => {

    const title = 'Dano Software'
    const subTitle = 'Building stuff since the 1980s'

    const FormattedTitle = ({ media }: MediaProps) => {
        const isMobile: boolean = media === MediaType.Mobile
        return (
            <>
                <Container text style={isMobile ? { fontSize: '1.5em', padding: '1em' } : { fontSize: '2em', padding: '1em' }}>
                    <Header size='huge' textAlign='center'>
                        {title}
                        <HeaderSubheader>
                            {subTitle}
                        </HeaderSubheader>
                    </Header>
                </Container>
            </>
        )
    }

    return (
        <>
            <Media greaterThan='mobile'>
                <FormattedTitle media={MediaType.Desktop} />
            </Media>
            <Media at='mobile'>
                <FormattedTitle media={MediaType.Mobile} />
            </Media>
            <Divider style={{ margin: '1em 0em 2em' }} />
        </>
    )
}

export default AppTitle
