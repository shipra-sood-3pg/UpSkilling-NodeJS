const dbHelper = require('../dbhelper');

module.exports.getAllOrders = async() => {
    const [records] = await dbHelper.query('SELECT * FROM Orders');
    return records;
}

module.exports.getOrderById = async(id) => {
    const [[record]] = await dbHelper.query('SELECT * FROM Orders WHERE Id = ?', [id]);
    return record;
}

module.exports.deleteOrder = async(id) => {
    const [{affectedRows}] = await dbHelper.query('DELETE FROM Orders WHERE Id = ?', [id]);
    return affectedRows;
}

module.exports.addOrder = async(objOrder, id = 0) => {
    const [{affectedRows}] = await dbHelper.query('INSERT INTO Orders (title, quantity,message,city) VALUES (?,?,?,?);', 
                            [objOrder.title, objOrder.quantity,objOrder.message,objOrder.city]);
    return affectedRows;
}

module.exports.editOrder = async(objOrder, id) => {
    const [data] = await dbHelper.query('UPDATE Orders SET title = ? , quantity = ?,message = ?,city = ? WHERE Id = ?;', 
                            [objOrder.title, objOrder.quantity,objOrder.message,objOrder.city, id]);
    return data;
}