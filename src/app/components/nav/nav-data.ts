import { NavModel } from 'src/app/models/nav.model';

export const NAVS: NavModel[] = [
  {
    name: 'Dashboard',
    routerLink: '/main'
  },
  {
    name: 'Carousel',
    routerLink: '/carousel'
  },
  {
    name: 'Table',
    routerLink: '/table'
  },
  {
    name: 'List',
    routerLink: '/list'
  },
  {
    name: 'Articles',
    routerLink: '/show-post'
  },
];
