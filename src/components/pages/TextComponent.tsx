import { GridColumn, GridRow } from "semantic-ui-react"
import { TextContent } from "../../types/Content"

const TextComponent = ({ text }: { text: TextContent }) => (
    <GridRow>
        <GridColumn width={16} textAlign='left'>
            <p>
                {text.quote ? <i>{text.text}</i> : text.text}
            </p>
        </GridColumn>
    </GridRow>
)

export default TextComponent