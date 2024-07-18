import { Outlet } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { Media } from "./Media"

const AppPage = () => {

    const desktopStyle = {
        backgroundColor: '#fff',
        margin: '3em 0em 0em',
        padding: '3em 0em',
    }

    const mobileStyle = {
        backgroundColor: '#fff',
        margin: '1em 0em 0em',
        padding: '3em 0em',
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
