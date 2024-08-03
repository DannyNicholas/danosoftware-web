import { useNavigate } from "react-router-dom"
import { Button, Grid, GridColumn } from "semantic-ui-react"
import { PRIVACY_ROUTE } from "../../constants/Constants"
import { PrivacyPolicyButtonContent } from "../../types/Content"

const PrivacyButtonComponent = ({ id, button }: { id: string, button: PrivacyPolicyButtonContent }) => {
    const navigate = useNavigate()

    return (
        <Grid style={{ padding: '1em' }}>
            <GridColumn textAlign='center'>
                <Button primary as='a' size='large' onClick={() => navigate(`${PRIVACY_ROUTE}/${id}`)}>
                    {button.caption}
                </Button>
            </GridColumn>
        </Grid>
    )
}

export default PrivacyButtonComponent
