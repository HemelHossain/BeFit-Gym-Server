const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const service = require('./Data/Service.json');
const product = require('./Data/Product.json');
const price = require('./Data/Price.json');
const blog = require('./Data/Blog.json');

app.get('/', (req, res) => {
    res.send('BeFit Gym server is running');
});

app.get('/service', (req, res) => {
    res.send(service);
});
app.get('/service/:id', (req, res) => {
    const id = req.params.id;
    const selectedService = service.find(s => s.id === id);
    res.send(selectedService);
});
app.get('/product', (req, res) => {
    res.send(product);
});
app.get('/price', (req, res) => {
    res.send(price);
});
app.get('/blog', (req, res) => {
    res.send(blog);
});

app.listen(port, () => {
    console.log(`BeFit Gym running on port, ${port}`);
})