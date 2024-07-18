import { SemanticICONS } from "semantic-ui-react";

export type MenuOption = {
    readonly id: string,
    readonly label: string,
    readonly icon: SemanticICONS,
    readonly route: string,
}
