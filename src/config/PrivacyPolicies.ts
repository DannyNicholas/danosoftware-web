import PlutoPanicIcon from "../assets/projects/pluto-panic/icon.png"
import { ContentType, PageContent } from "../types/Content"

// holds content for each project's privacy policy
// the id must match the parent project's id
export const PrivacyPolicies: PageContent[] = [
    {
        id: 'pluto-panic',
        header: 'Pluto Panic - Privacy Policy',
        icon: PlutoPanicIcon,
        structure: [
            {
                type: ContentType.Header,
                text: 'Information We Collect',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'We do not collect any personal information.',
                    'Anonymous usage data may be collected to improve game performance.',
                ],
            },
            {
                type: ContentType.Header,
                text: 'How We Use Information',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'We may use anonymous aggregated user behavior to analyse game performance.',
                    'We may use anonymous data to improve the game experience.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Data Sharing',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'We do not share any data with third parties.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Data Security',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'We implement security measures to protect our systems and any anonymous data collected.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Children\'s Privacy',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'Our game is suitable for children under 13.',
                    'We do not knowingly collect any personal information from children.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Your Rights',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'As we do not collect personal information, there is no personal data to access, correct, or delete.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Changes to This Policy',
            },
            {
                type: ContentType.Bullets,
                list: [
                    'If we update this policy, we will post any changes here.',
                ]
            },
            {
                type: ContentType.Header,
                text: 'Last updated: July 2024'
            },
            {
                type: ContentType.Image,
                image: PlutoPanicIcon,
                caption: 'Pluto Panic'
            }
        ]
    },
]
