import utils from '../utils.js';
import config from '../../config.js';
import sql from 'mssql';


const getOrders = async (orderId) => {
    try {
        let pool = await sql.connect(config.sql);
        let sqlQueries = await utils.loadSqlQueries('orders');

        if(orderId == undefined){
            let ordersList = await pool.request().query(sqlQueries.orderslist);
            return ordersList.recordset;
        } else {
            let order = await pool.request()
                            .input('orderId', sql.Int, parseInt(orderId))
                            .query(sqlQueries.orderById);
            return order.recordset;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const saveOrder = async (orderObj) => {
    try {
        let currDate = new Date();
        let pool = await sql.connect(config.sql);
        let sqlQueries = await utils.loadSqlQueries('orders');
        let request = pool.request();

        request.input('orderTitle', sql.VarChar, orderObj.OrderTitle);
        request.input('orderQuantity', sql.Int, orderObj.OrderQuantity);
        request.input('remarks', sql.VarChar, orderObj.Remarks );
        request.input('status', sql.VarChar, orderObj.Status );

        let [orderDateDate, orderDateMonth, orderDateYear] = orderObj.OrderDate.split('/');
        request.input('orderDate', sql.DateTime, new Date(+orderDateYear, +orderDateMonth - 1, +orderDateDate));

        if (orderObj.OrderDeliveryDate){
            let [deliveryDate, deliveryMonth, deliveryYear] = orderObj.OrderDeliveryDate.split('/');
            request.input('orderDeliveryDate', sql.DateTime, new Date(+deliveryYear, +deliveryMonth - 1, +deliveryDate) );
        }
        else {
            request.input('orderDeliveryDate', sql.DateTime, null );
        }

        request.input('createDate', sql.DateTime, currDate);
        request.input('modifyDate', sql.DateTime, currDate);

        let insertedRecord = await request.query(sqlQueries.saveNewOrder);
        let order = await pool.request()
                            .input('orderId', sql.Int, parseInt(insertedRecord.recordset[0]["OrderId"]))
                            .query(sqlQueries.orderById);
        return order.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

const updateOrder = async (orderId, orderObj) => {
    try {
        let pool = await sql.connect(config.sql);
        let sqlQueries = await utils.loadSqlQueries('orders');

        let [orderDateDate, orderDateMonth, orderDateYear] = orderObj.OrderDate.split('/');
        let orderDeliveryDate = null;

        if (orderObj.OrderDeliveryDate){
            let [deliveryDate, deliveryMonth, deliveryYear] = orderObj.OrderDeliveryDate.split('/');
            orderDeliveryDate = new Date(+deliveryYear, +deliveryMonth - 1, +deliveryDate);
        }
        
        let result = await pool.request()
                            .input('orderId', sql.Int, parseInt(orderId))
                            .input('orderTitle', sql.VarChar, orderObj.OrderTitle)
                            .input('orderQuantity', sql.Int, orderObj.OrderQuantity)
                            .input('remarks', sql.VarChar, orderObj.Remarks )
                            .input('status', sql.VarChar, orderObj.Status )
                            .input('orderDate', sql.DateTime, new Date(+orderDateYear, +orderDateMonth - 1, +orderDateDate))
                            .input('orderDeliveryDate', sql.DateTime, orderDeliveryDate)
                            .input('modifyDate', sql.DateTime, new Date())
                            .query(sqlQueries.updateOrder);
        
        let order = await pool.request()
                            .input('orderId', sql.Int, parseInt(orderId))
                            .query(sqlQueries.orderById);
        return order.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

const deleteOrder = async (orderId) => {
    try {
        let pool = await sql.connect(config.sql);
        let sqlQueries = await utils.loadSqlQueries('orders');
       
        let result = await pool.request()
                            .input('orderId', sql.Int, parseInt(orderId))
                            .query(sqlQueries.deleteOrderById);
        
        return result.recordset;
    }
    catch (error) {
        console.log(error.message);
    }
}

export default {
    getOrders,
    saveOrder,
    updateOrder,
    deleteOrder
}