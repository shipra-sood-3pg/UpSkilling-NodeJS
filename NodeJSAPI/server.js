const express = require('express'),
        app = express(),
        bodyParser = require('body-parser');
const PORT = 3000;

require('express-async-errors');

const ordersRoutes = require('./controllers/orders.controller');

//middleware
app.use(bodyParser.json());
app.use('/api/orders', ordersRoutes);

//global error handler
app.use((err, request, response, next) => {
    console.log(err);
    response.status(err.status || 500).send ('Something went wrong!!');
});

app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});

module.exports = app;