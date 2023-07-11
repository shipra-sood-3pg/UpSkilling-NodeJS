const express = require('express'),
router = express.Router();

const service = require('../services/orders.service');

//Route: http://localhost:3000/api/orders
router.get('/', async (request, response) => {
    let orders = await service.getAllOrders();
    response.send(orders);
});

//Route: http://localhost:3000/api/orders/{id}
router.get('/:id', async (request, response) => {
    let order = await service.getOrderById(request.params.id);

    if(order == undefined){
        response.status(404).json('no record with given id : ' + request.params.id);
    }
    else {
        response.send(order);
    }
});

//Route: http://localhost:3000/api/orders/{id}
router.delete('/:id', async (request, response) => {
    let affectedRows = await service.deleteOrder(request.params.id);

    if(affectedRows == 0){
        response.status(404).json('no record with given id : ' + request.params.id);
    }
    else {
        response.send('deleted successfully');
    }
});

//Route: http://localhost:3000/api/orders/
router.post('/', async (request, response) => {
    let affectedRows = await service.addOrder(request.body);

    if(affectedRows == 0){
        response.status(404).json('unable to insert record into the database' );
    }
    else {
        response.status(201).send('record inserted successfully');
    }
});

//Route: http://localhost:3000/api/orders/{id}
router.put('/:id', async (request, response) => {
    let data = await service.editOrder(request.body, request.params.id);
    response.send(data);    
});

module.exports = router;