export const enum ContentType {
    Text, Image
}

export type ExampleContent = {
    readonly id: string,
    readonly header: string,
    readonly icon: string,
    readonly structure: (ImageContent | TextContent)[],
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
