insert into carts (user_id, created_at, updated_at, status) values
(gen_random_uuid(), '2023-03-15', '2023-03-17', 'OPEN'),
(gen_random_uuid(), '2023-03-18', '2023-03-19', 'OPEN'),
(gen_random_uuid(), '2023-03-15', '2023-03-21', 'OPEN')


insert into cart_items (cart_id, product_id, count) values
('fdbff3c6-34fc-48ec-9269-31e1f5f74703', gen_random_uuid(), 40),
('fdbff3c6-34fc-48ec-9269-31e1f5f74703', gen_random_uuid(), 50),
('47e84c55-35ad-4a2c-8fba-2987293aaf5e', gen_random_uuid(), 10),
('685e66bd-9c84-4b9a-a260-417b0e71a3c6', gen_random_uuid(), 25),
('685e66bd-9c84-4b9a-a260-417b0e71a3c6', gen_random_uuid(), 30)

insert into orders (id, user_id, cart_id, payment, delivery, comments, status, total) values
(gen_random_uuid(), gen_random_uuid(), 'fdbff3c6-34fc-48ec-9269-31e1f5f74703', '{"cart": "Visa"}', '{"delivery": "FedEx"}', 'First order', 'ORDERED', 5),
(gen_random_uuid(), gen_random_uuid(), 'fdbff3c6-34fc-48ec-9269-31e1f5f74703', '{"cart": "MasterCard"}', '{"delivery": "AutoLight"}', 'Second order', 'ORDERED', 10)