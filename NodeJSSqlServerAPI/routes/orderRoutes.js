import express from 'express';
import * as orderController  from '../controllers/orderController.js';

const routes = express.Router();

routes.get('/orders/:id?',  (request, response, next) => {    
    orderController.getOrders(request, response, next);
});

routes.post('/saveOrder',  (request, response, next) => {    
    orderController.saveOrder(request, response, next);
});

routes.put('/updateOrder/:id',  (request, response, next) => {    
    orderController.updateOrder(request, response, next);
});

routes.delete('/deleteOrder/:id',  (request, response, next) => {    
    orderController.deleteOrder(request, response, next);
});

export default routes;