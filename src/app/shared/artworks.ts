import { Artwork } from "./artwork";

export const ARTWORKS: Artwork[] = [
    {
        id: '0',
        name: 'Vis',
        image: '/assets/images/vis.jpg',
        category: 'painting',
        featured: false,
        label: 'sold',
        price: '19.99',
        // tslint:disable-next-line:max-line-length
        description: 'een vis met man in bad',
    },
    {
        id: '1',
        name: 'neus',
        image: '/assets/images/neus.jpg',
        category: 'painting',
        featured: false,
        label: 'for sale',
        price: '19.99',
        // tslint:disable-next-line:max-line-length
        description: 'een grote neus',
    },
    {
        id: '2',
        name: 'pluisje',
        image: '/assets/images/pluisje.jpg',
        category: 'painting',
        featured: false,
        label: 'for sale',
        price: '19.99',
        // tslint:disable-next-line:max-line-length
        description: 'tweekoppige hond',
    }
]