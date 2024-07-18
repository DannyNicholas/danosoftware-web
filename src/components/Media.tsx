import { createMedia } from '@artsy/fresnel'

const AppMedia = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

/* eslint react-refresh/only-export-components: "off" */
export const { Media, MediaContextProvider } = AppMedia
