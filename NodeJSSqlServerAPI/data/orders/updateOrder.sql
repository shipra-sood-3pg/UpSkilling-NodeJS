UPDATE [dbo].[Orders] SET [OrderTitle] = @orderTitle, [OrderQuantity] = @orderQuantity, [Remarks] = @remarks ,[Status] = @status ,[OrderDate] = @orderDate ,[OrderDeliveryDate] = @orderDeliveryDate ,[ModifyDate] = @modifyDate WHERE [OrderId]=@OrderId;