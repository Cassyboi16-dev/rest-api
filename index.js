const express = require("express");
const app = express();
const port = 3000

// middleware
app.use(express.json())

// api endpoint
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
   if(!name){
        return res.status(418).send({message: "no name attached"})
   }

   res.send({cloth: `${name} has an id of ${id}`,})
})

app.listen(port, ()=> console.log(`it's running http://localhost:${port}`))