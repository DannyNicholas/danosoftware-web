import PlutoPanicIcon from "../assets/projects/pluto-panic/icon.png"
import { PRIVACY_ROUTE } from "../constants/Constants"
import { ContentType, PageContent } from "../types/Content"

// holds content for each project page
export const Projects: PageContent[] = [
    {
        id: 'pluto-panic',
        header: 'Pluto Panic',
        icon: PlutoPanicIcon,
        structure: [
            {
                type: ContentType.Text,
                text: 'Pluto Panic is here!',
            },
            {
                type: ContentType.Image,
                image: PlutoPanicIcon,
                caption: 'Pluto Panic'
            },
            {
                type: ContentType.Image,
                image: PlutoPanicIcon,
                caption: 'Pluto Panico'
            },
            {
                type: ContentType.Button,
                caption: 'Privacy Policy',
                url: `${PRIVACY_ROUTE}/pluto-panic`
            },
        ]
    },
]
