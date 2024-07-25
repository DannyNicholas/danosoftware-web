import PlutoPanicIcon from "../assets/projects/pluto-panic/icon.png"
import { ContentType, ProjectContent } from "../types/Project"

// holds content for each project page
export const Projects: ProjectContent[] = [
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
        ]
    },
]
