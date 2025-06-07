create database store_db;
use store_db;
CREATE TABLE products (
    id int auto_increment primary key,
    name nvarchar(100) not null,
    price int not null
);
CREATE TABLE orders (
    id int auto_increment primary key,
    product_id int,
    quantity int not null,
    order_date date not null,
    foreign key (product_id) references products(id)
);

insert into products (name, price) values
('Laptop', 30000),
('Mouse', 500),
('Keyboard', 1000),
('Monitor', 8000),
('USB Cable', 200),
('Speaker', 1500);

insert into orders (product_id, quantity, order_date) values
(1, 2, '2025-06-01'),
(2, 5, '2025-06-02'),
(3, 3, '2025-06-03'),
(1, 1, '2025-06-05'),
(2, 2, '2025-06-06'),
(4, 4, '2025-06-07'),
(3, 1, '2025-06-08'),
(2, 1, '2025-05-28'),
(5, 10, '2025-06-02');


select 
p.name as product_name,
sum(o.quantity) as total_quantity_sold,
sum(o.quantity * p.price) as total_income
from
orders o
join
products p on o.product_id = p.id
where
month(o.order_date) = month(curdate())
and year(o.order_date) = year(curdate())

group by
p.id,p.name

order by
total_quantity_sold desc
limit 5;