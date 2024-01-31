customers" with following fields:
customer_id (String),
first_name (String),
last_name (String),
email (String),
password (String)
"products" with following fields:
product_id (String),
product_name (String),
product_description (String),
product_price (Number),
product_quantity (Number),
category (String)
"orders" with following fields:
order_id (String),
customer_id (String),
order_date (DATE),
total_price (Number)
"order_items" with columns:
order_item_id (String),
order_id (String),
product_id (String),
quantity (Number),
price (Number),