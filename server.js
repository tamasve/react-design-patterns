// A very simpole supporting Node.js server for this React app

import express from 'express';
import cors from 'cors';

const products = [{
    id: 1,
    name: 'Flat-Screen TV', 
    price: 300,
    description: 'Huge LCD screen, a gread deal',
    rating: 4.5
}, {
    id: 2,
    name: 'Basketball', 
    price: 10,
    description: 'Just like the pros use',
    rating: 3.8
}, {
    id: 3,
    name: 'Running Shoes', 
    price: 120,
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2
}
]

const app = express();

app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/products/:id', (req, res) => {
    if (!req.params?.id) return res.status(400).json({message: "ID is required"});
    const product = products.find(item => item.id === req.params.id);
    if (!product)  return res.status(400).json({message: "Wrond ID"});
    res.status(200).json(product);
})

app.all("*", (req, res) => {
    res.sendStatus(404);
})

app.listen(3500, () => console.log("Server running on port 3500"));