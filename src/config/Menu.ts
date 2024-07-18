import { ABOUT_ROUTE, CONTACT_ROUTE, EXAMPLES_SUMMARY, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from '../constants/Constants';
import { MenuOption } from "../types/Menu";

export const MenuOptions: MenuOption[] = [
    {
        id: 'home',
        label: 'Home',
        icon: 'home',
        route: HOME_ROUTE,
    },
    {
        id: 'gallery',
        label: 'Gallery',
        icon: 'picture',
        route: GALLERY_ROUTE,
    },
    {
        id: 'price',
        label: 'Prices',
        icon: 'pound',
        route: PRICES_ROUTE,
    },
    {
        id: 'examples',
        label: 'Examples',
        icon: 'paw',
        route: EXAMPLES_SUMMARY,
    },
    {
        id: 'contact',
        label: 'Contact Me',
        icon: 'mail',
        route: CONTACT_ROUTE,
    },
    {
        id: 'about',
        label: 'About Me',
        icon: 'paint brush',
        route: ABOUT_ROUTE,
    },
]
