const products = require('./../products.json')

const getProducts = (req, res) => {
    const {price} = req.query
    if(+req.query.price){
        const product = products.filter(item => {
            return item.price >= price
        })
        res.send(product)
    } else{
        res.send(products)
    }
}


module.exports = {
    getProducts  
}