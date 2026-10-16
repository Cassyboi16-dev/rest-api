const express = require("express");
const app = express();
const port = 3000

// middleware
app.use(express.json())

// api endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: "All is well",
    })
})


app.post('/:id', (req, res) => {

    const { id } = req.params
    const { message } = req.body

    if (!message) {
        res.status(404).send({ message: `it's impossible to retrieve your data ${new Date().getUTCDate()} this message has an id of ${id}` })
    }

    if (message === 'yeah') {
        res.status(201).send({ message: "data successfully sent" })
    }
    else if (message === '') {
        res.status(200).send({
            secret: "You have been hacked",
            price: 10,
            victim: undefined
        })
    } else if ("/bad-request"){
        app.get('/404/404.html', (req, res) => {
            res.status(404).send({
                message: "Page refused to load"

            })
        })
    }



})


app.get('/cloth', (req, res) => {
    res.status(200).json({
        name: "t-shirt",
        price: "ℕ15,000",
        color: "#000"
    })
})


// endpoint with a unique id it's also a dynamic route
app.post('/cloth/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    if (!name) {
        return res.status(418).send({ message: "no name attached" })
    }

    res.send({ cloth: `${name} has an id of ${id}`, })
})

app.listen(port, () => console.log(`it's running http://localhost:${port}`))