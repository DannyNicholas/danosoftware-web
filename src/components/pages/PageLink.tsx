import { Link } from "react-router-dom";
import { GridColumn, Header, Image, Segment } from "semantic-ui-react";
import { PageContent } from "../../types/Content";

export type PageLinkProps = {
    readonly content: PageContent,
    readonly url: string,
}

// a clickable link holding a content icon and header
const PageLink = ({ content, url }: PageLinkProps) => (
    <GridColumn width={8}>
        <Link to={url} >
            <Segment secondary size='tiny' raised textAlign='center'>
                <Header as={'h3'}>
                    <Image circular src={content.icon} size='massive' />
                    {content.header}</Header>
            </Segment>
        </Link>
    </GridColumn>
)

export default PageLink
