const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();


const app= express()
app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );
massive(process.env.CONNECTION_STRING)
.then(db=>{
    app.set("db", db)
})
.catch(err => console.log(err))

app.get('/api/products', controller.read)
app.post('/api/products', controller.create)
app.delete('/api/products/:id', controller.delete)
app.patch('/api/products/:id', controller.update)
app.get('/api/products/:id', controller.getOne)

const port = 3002

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`);
});