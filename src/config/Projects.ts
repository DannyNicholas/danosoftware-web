import PlutoPanicIcon from "../assets/projects/pluto-panic/icon.png"
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
                text: 'Pluto Panic is an Android mobile game inspired by the many\
                space invader games that I used to play as a kid.',
            },
            {
                type: ContentType.Text,
                text: 'Pluto Panic will be available in the Google Play Store very soon.',
            },
            {
                type: ContentType.Image,
                image: PlutoPanicIcon,
                caption: 'Pluto Panic'
            },
            {
                type: ContentType.PrivacyPolicyButton,
                caption: 'Click to see our Privacy Policy',
            },
        ]
    },
]
