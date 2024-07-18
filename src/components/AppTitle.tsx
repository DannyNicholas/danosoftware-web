import { Container, Header } from "semantic-ui-react"
import { MediaProps, MediaType } from "../types/Media"
import { Media } from "./Media"

const AppTitle = () => {

    const name = 'MELANIE NICHOLAS'
    const occupation = 'Animal Portrait Artist'

    const hugeText = {
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: '0.5em',
        marginTop: '1em',
    }

    const hugeTextMobile = {
        marginBottom: '0em',
        marginTop: '0.5em',
    }

    const largeText = {
        fontSize: '3em',
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
                    <Header className='text-outline' size='huge' textAlign='center' inverted style={isMobile ? hugeTextMobile : hugeText}>
                        {name}
                    </Header>
                    <Header className='text-outline' size='large' textAlign='center' inverted style={isMobile ? largeTextMobile : largeText}>
                        {occupation}
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
