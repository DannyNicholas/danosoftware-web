import { Container, Header } from "semantic-ui-react"
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppTitle = () => {

    const title = 'Dano Software'
    const subTitle = 'Building stuff since the 1980s'

    const hugeText = {
        fontSize: '5em',
        fontWeight: 'normal',
        marginBottom: '0.5em',
        marginTop: '1em',
    }

    const hugeTextMobile = {
        marginBottom: '0em',
        marginTop: '0.5em',
    }

    const largeText = {
        fontSize: '2em',
        fontWeight: 'normal',
        marginBottom: '1em',
        marginTop: '0.5em',
    }

    const largeTextMobile = {
        marginBottom: '1em',
        marginTop: '0em',
    }

    const FormattedTitle = ({ media }: MediaProps) => {
        const isMobile: boolean = media === MediaType.Mobile
        return (
            <>
                <Container text >
                    <Header size='huge' textAlign='center' style={isMobile ? hugeTextMobile : hugeText}>
                        {title}
                    </Header>
                    <Header size='small' textAlign='center' style={isMobile ? largeTextMobile : largeText}>
                        {subTitle}
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
        </>
    )
}

export default AppTitle
