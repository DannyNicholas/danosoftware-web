import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import { Container, Grid } from "semantic-ui-react"
import ButtonComponent from "../components/pages/ButtonComponent"
import Page from "../components/pages/Page"
import { PrivacyPolicies } from "../config/PrivacyPolicies"
import { HOME_ROUTE, PROJECTS_ROUTE } from "../constants/Constants"
import { ButtonContent, ContentType, PageContent } from "../types/Content"

const PrivacyPolicy = () => {

    // ensure we scroll to top of page when opening a new privacy page
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    const { id } = useParams()

    // extract content for chosen PrivacyPolicy page
    // throw an error if user has navigated to an unrecognised PrivacyPolicy
    const content: PageContent | undefined = PrivacyPolicies.find(item => item.id === id)
    if (typeof content === "undefined") {
        throw new Error(`Privacy Policy '${id}' not found.`)
    }

    // create a back button to go back to the equivalent project page
    const backButton: ButtonContent = {
        type: ContentType.Button,
        caption: 'Back ...',
        url: id === undefined ? `${HOME_ROUTE}` : `${PROJECTS_ROUTE}/${id}`
    }

    return (
        <>
            <Container text>
                <Page content={content} />
                <Grid>
                    <ButtonComponent button={backButton} />
                </Grid>
            </Container>
        </>
    )
}

export default PrivacyPolicy
