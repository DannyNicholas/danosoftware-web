import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from '../constants/Constants';
import { MenuOption } from "../types/Menu";

export const MenuOptions: MenuOption[] = [
    {
        id: 'home',
        label: 'Home',
        icon: 'home',
        route: HOME_ROUTE,
    },
    {
        id: 'projects',
        label: 'Projects',
        icon: 'code',
        route: PROJECTS_ROUTE,
    },
    {
        id: 'about',
        label: 'About Me',
        icon: 'user secret',
        route: ABOUT_ROUTE,
    },
]
