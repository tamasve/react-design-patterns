export type Product = {
    name: string;
    price: number;
    description: string;
    rating: number
}

export const products: Product[] = [{
    name: 'Flat-Screen TV', 
    price: 300,
    description: 'Huge LCD screen, a gread deal',
    rating: 4.5
}, {
    name: 'Basketball', 
    price: 10,
    description: 'Just like the pros use',
    rating: 3.8
}, {
    name: 'Running Shoes', 
    price: 120,
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2
}
]