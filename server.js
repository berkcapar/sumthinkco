const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000;
const queries = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/customers', queries.getCustomers);
app.post('/createcustomers', queries.createCustomers);
app.post('/updatecustomers', queries.updateCustomers);
app.post('/deletecustomers', queries.deleteCustomers);


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

