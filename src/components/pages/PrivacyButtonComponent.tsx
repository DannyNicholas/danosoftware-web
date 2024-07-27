import { useNavigate } from "react-router-dom"
import { Button, GridColumn, GridRow } from "semantic-ui-react"
import { PRIVACY_ROUTE } from "../../constants/Constants"
import { PrivacyPolicyButtonContent } from "../../types/Content"

const PrivacyButtonComponent = ({ id, button }: { id: string, button: PrivacyPolicyButtonContent }) => {
    const navigate = useNavigate()

    return (
        <GridRow>
            <GridColumn width={16} textAlign='center'>
                <Button as='a' size='large' onClick={() => navigate(`${PRIVACY_ROUTE}/${id}`)}>
                    {button.caption}
                </Button>
            </GridColumn>
        </GridRow>
    )
}

export default PrivacyButtonComponent
