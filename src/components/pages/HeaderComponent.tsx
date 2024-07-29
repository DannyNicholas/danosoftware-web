import { GridRow, Header } from "semantic-ui-react"
import { HeaderContent } from "../../types/Content"

const HeaderComponent = ({ header }: { header: HeaderContent }) => (
    <GridRow>
        <Header as='h3' style={{ padding: '1em 0em' }}>
            {header.text}
        </Header>
    </GridRow>
)

export default HeaderComponent
