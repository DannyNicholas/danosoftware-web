import PlutoPanicIcon from "../assets/projects/pluto-panic/icon.png"
import { ContentType, PageContent } from "../types/Content"

// holds content for each project page
export const PrivacyPolicies: PageContent[] = [
    {
        id: 'pluto-panic',
        header: 'Pluto Panic',
        icon: PlutoPanicIcon,
        structure: [
            {
                type: ContentType.Text,
                text: 'Pluto Panic Privacy',
            },
            {
                type: ContentType.Image,
                image: PlutoPanicIcon,
                caption: 'Pluto Panic'
            }
        ]
    },
]
