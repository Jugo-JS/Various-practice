const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1><a href='api/products'>products</a>")
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find((product) => {
        const { productID } = req.params
        return product.id === Number(productID)
    })
    if(!singleProduct) {
        return res.status(404).send('Product does not exist!')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    let newProducts = [...products]
    const { search, limit } = req.query

    if(search) {
        newProducts = newProducts.filter((product) => product.name.startsWith(search))
    }
    if(limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }
    if(newProducts.length < 1) {
       return res.status(200).json({ succes: true, data: [] })
    }
    res.status(200).json(newProducts)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000..')
})