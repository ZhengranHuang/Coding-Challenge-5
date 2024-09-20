//Task 1:Create an Inventory Array of Product Objects
const inventory = [
{ name: 'Espresso', price: 3, quantity: 10 },
{ name: 'Latte', price: 4, quantity: 5 },
{ name: 'Cappuccino', price: 4, quantity: 6 },
{ name: 'Mocha', price: 5, quantity: 4 }
];
//use sample Data to create the array

//Task 2:Create an Orders Array of Order Objects
const order = [];
//empty array

//Task 3:Create a Function to Place an Order
function placeOrder(customerName, items){
let itemsleft;
items.forEach(item => {
//loops through each item in the itemsOrdered array
let product = inventory.find(product => product.name === item.name)
if (!product){console.log(`The product is not exist.`);}
else if (product.quantity < item.quantity){console.log(`The product is not enough for order.`)}
if (product){itemsleft = product.quantity - item.quantity;
console.log(`The order is completable.Itemsleft ${itemsleft},customerName${customerName},Status${order.status}`);
}
}
)
}
//use push() to give order array properties
order.push(
{ customername: 'aa',quantity: 5, status:'Pending'}
)
placeOrder(order[0], Latte)//Wrong output:(

//Task 4:Create a Function to Calculate Total for an Order
function calculateOrderTotal(order){
const totalValue = order.reduce((i, product) =>{
return i + (product.price * product.quantity);
}, 0);
return totalValue;
}
calculateOrderTotal(order)



