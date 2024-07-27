import { useNavigate } from "react-router-dom"
import { Button, GridColumn, GridRow } from "semantic-ui-react"
import { ButtonContent } from "../../types/Content"

const ButtonComponent = ({ button }: { button: ButtonContent }) => {
    const navigate = useNavigate()

    return (
        <GridRow>
            <GridColumn width={16} textAlign='center'>
                <Button as='a' size='large' onClick={() => navigate(button.url)}>
                    {button.caption}
                </Button>
            </GridColumn>
        </GridRow>
    )
}

export default ButtonComponent
