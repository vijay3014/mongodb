1.
mongod
mongosh  
use ecommerce
show dbs



2. & 3.

db.customers.insertOne({
    customer_id: "C0001",
    frist_name: "Virat",
    last_name: "Kohli",
    email: "vk17@gmail.com",
    password: "Virat@1234"
});

db.products.insertOne({
    product_id: "P0001",
    product_name: "I phone 15 Pro Max",
    product_description: "12/256 GB",
    product_price: 169999,
    product_quantity: 1, 
    category: "5G"
});

db.orders.insertOne({
    order_id: "ORD01",
    customer_id: "C0001",
    order_date: "2024-01-15",
    total_price: 169999
});

db.order_items.insertOne({
    order_item_id: "OID01",
    order_id: "ORD01",
    product_id: "P0001",
    quantity: 1,
    price: 169999
});


  
4.
db.customers.find({})


5.
db.products.find({})


6.
db.orders.find({})


7.
db.order_items.find({})


8.




9.
db.products.updateOne({ product_id: "P0001" },{ $set: { product_quantity: 10 } } );


10.



11.



12.
db.orders.deleteOne({ order_id: "ORD01" });
