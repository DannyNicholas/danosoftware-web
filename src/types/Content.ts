export const enum ContentType {
    Text, Image, Button, PrivacyPolicyButton, Bullets, Header
}

export type PageContent = {
    readonly id: string,
    readonly header: string,
    readonly icon: string,
    readonly structure: (HeaderContent | ImageContent | TextContent | ButtonContent | PrivacyPolicyButtonContent | BulletsContent)[],
}

export type HeaderContent = {
    readonly type: ContentType.Header,
    readonly text: string,
}

export type ImageContent = {
    readonly type: ContentType.Image,
    readonly image: string,
    readonly caption: string,
}

export type TextContent = {
    readonly type: ContentType.Text,
    readonly quote?: boolean,
    readonly text: string,
}

export type ButtonContent = {
    readonly type: ContentType.Button,
    readonly caption: string,
    readonly url: string,
}

export type PrivacyPolicyButtonContent = {
    readonly type: ContentType.PrivacyPolicyButton,
    readonly caption: string,
}

export type BulletsContent = {
    readonly type: ContentType.Bullets,
    readonly list: string[],
}
