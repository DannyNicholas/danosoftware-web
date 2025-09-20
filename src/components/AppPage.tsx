import { Outlet } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { Media } from "./Media"

const AppPage = () => {

    const desktopStyle = {
        backgroundColor: '#fff',
        marginTop: '1em',
        marginBottom: '1em',
        padding: '3em 1em',
    }

    const mobileStyle = {
        backgroundColor: '#fff',
        padding: '3em 1em',
    }

    return (
        <>
            <Media greaterThan='mobile'>
                <Container style={desktopStyle}>
                    <Outlet />
                </Container>
            </Media>
            <Media at='mobile'>
                <Container style={mobileStyle}>
                    <Outlet />
                </Container>
            </Media>
        </>
    )
}

export default AppPage
