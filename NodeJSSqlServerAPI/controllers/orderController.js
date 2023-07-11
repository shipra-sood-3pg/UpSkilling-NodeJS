import ordersData from '../data/orders/index.js';

export const getOrders = async(request, response, next) =>{
    try {
        const ordersList = await ordersData.getOrders(request.params.id);
        response.send(ordersList);
    }
    catch(error) {
        response.status(400).send(error.message);
    }
}

export const saveOrder = async(request, response, next) => {
    try{
        const savedOrder = await ordersData.saveOrder(request.body);
        response.send(savedOrder);
    }
    catch(error) {
        response.status(400).send(error.message);
    }
}

export const updateOrder = async(request, response, next) => {
    try{
        const updatedOrder = await ordersData.updateOrder(request.params.id, request.body);
        response.send(updatedOrder);
    }
    catch(error) {
        response.status(400).send(error.message);
    }
}

export const deleteOrder = async(request, response, next) => {
    try{
        const updatedOrder = await ordersData.deleteOrder(request.params.id, request.body);
        response.send(updatedOrder);
    }
    catch(error) {
        response.status(400).send(error.message);
    }
}