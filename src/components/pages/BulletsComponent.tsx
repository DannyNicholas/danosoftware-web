import { GridRow, List, ListItem } from "semantic-ui-react"
import { BulletsContent } from "../../types/Content"

const BulletsComponent = ({ bullets }: { bullets: BulletsContent }) => (
    <GridRow>
        <List bulleted>
            {
                bullets.list.map((item, index) =>
                    <ListItem key={index}>
                        {item}
                    </ListItem>)
            }
        </List >
    </GridRow>
)

export default BulletsComponent
