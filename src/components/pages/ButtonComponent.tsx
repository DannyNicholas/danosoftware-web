import { useNavigate } from "react-router-dom"
import { Button, Grid, GridColumn } from "semantic-ui-react"
import { ButtonContent } from "../../types/Content"

const ButtonComponent = ({ button }: { button: ButtonContent }) => {
    const navigate = useNavigate()

    return (
        <Grid style={{ padding: '1em' }}>
            <GridColumn textAlign="center">
                <Button primary as='a' size='large' onClick={() => navigate(button.url)}>
                    {button.caption}
                </Button>
            </GridColumn>
        </Grid>
    )
}

export default ButtonComponent
