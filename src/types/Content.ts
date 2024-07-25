export const enum ContentType {
    Text, Image, Button
}

export type PageContent = {
    readonly id: string,
    readonly header: string,
    readonly icon: string,
    readonly structure: (ImageContent | TextContent | ButtonContent)[],
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
