export type Products = {
    name: string;
    price: number;
    descripion: string;
    rating: number
}

export const products: Products[] = [{
    name: 'Flat-Screen TV', 
    price: 300,
    descripion: 'Huge LCD screen, a gread deal',
    rating: 4.5
}, {
    name: 'Basketball', 
    price: 10,
    descripion: 'Just like the pros use',
    rating: 3.8
}, {
    name: 'Running Shoes', 
    price: 120,
    descripion: 'State-of-the-art technology for optimum running',
    rating: 4.2
}
]