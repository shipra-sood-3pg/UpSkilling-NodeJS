export class Orders{
    constructor(OrderId, OrderTitle, OrderQuantity, Remarks, Status, OrderDate, OrderDeliveryDate){
        this.OrderId = OrderId;
        this.OrderTitle = OrderTitle;
        this.OrderQuantity = OrderQuantity;
        this.Remarks = Remarks;
        this.Status = Status;
        this.OrderDate = OrderDate;
        this.OrderDeliveryDate = OrderDeliveryDate;
    }
}