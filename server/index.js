const express = require('express')
const app = express()
const port = 5000
const products = require('./../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')




app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProduct.getProduct)


app.listen(port, () => {
    console.log('server is live')
})