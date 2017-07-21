export function testObj(){
    var order ={
        id:101,
        title:"Order1",
        price:1000,

         printOrder:function(){
            console.log("Order",order);
            
        },

         getPrice:function(){
           
            
            console.log("Order2",order.price);
        }

    };

            var order2=Object.assign({},order);
            console.log(order2);
            order.printOrder();
            order.getPrice();
            
}