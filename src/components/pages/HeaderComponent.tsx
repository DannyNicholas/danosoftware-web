import { Header } from "semantic-ui-react"
import { HeaderContent } from "../../types/Content"

const HeaderComponent = ({ header }: { header: HeaderContent }) => (
    <Header as='h4'>
        {header.text}
    </Header>
)

export default HeaderComponent
