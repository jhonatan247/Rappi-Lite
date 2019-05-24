INSERT INTO "Users"
    (type, id_number, name, phone, email, hash, salt, last_interaction_date, "createdAt", "updatedAt")
VALUES
    ('admin', 1, 'Andryut', 1, 'Andryut@correo.com', '787fdfe28e154fc0cbce24d7d1cd5cbe3d324e5516b61bd5073667a1c4c2d772', 'salesita', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Users"
    (type, id_number, name, phone, email, hash, salt, last_interaction_date, "createdAt", "updatedAt")
VALUES
    ('restaurant_admin', 2, 'corralero', 2, 'corralero@correo.com', '787fdfe28e154fc0cbce24d7d1cd5cbe3d324e5516b61bd5073667a1c4c2d772', 'salesita', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Users"
    (type, id_number, name, phone, email, hash, salt, last_interaction_date, "createdAt", "updatedAt")
VALUES
    ('shopkeeper', 3, 'tendero', 2, 'tendero@correo.com', '787fdfe28e154fc0cbce24d7d1cd5cbe3d324e5516b61bd5073667a1c4c2d772', 'salesita', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Users"
    (type, id_number, name, phone, email, hash, salt, last_interaction_date, "createdAt", "updatedAt")
VALUES
    ('customer', 4, 'comprador', 2, 'comprador@correo.com', '787fdfe28e154fc0cbce24d7d1cd5cbe3d324e5516b61bd5073667a1c4c2d772', 'salesita', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Users"
    (type, id_number, name, phone, email, hash, salt, last_interaction_date, "createdAt", "updatedAt")
VALUES
    ('restaurant_admin', 5, 'homeHambur', 2, 'home@correo.com', '787fdfe28e154fc0cbce24d7d1cd5cbe3d324e5516b61bd5073667a1c4c2d772', 'salesita', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Addresses"
    (customer_id, value, position, "createdAt", "updatedAt")
VALUES
    (4, 'Carrera 1 calle 1', ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-48.23456,20.12345]}'), 4326), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Addresses"
    (customer_id, value, position, "createdAt", "updatedAt")
VALUES
    (4, 'Carrera 2 calle 2', ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-4.23456,2.12345]}'), 4326), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Addresses"
    (customer_id, value, position, "createdAt", "updatedAt")
VALUES
    (4, 'Carrera 3 calle 3', ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-48.23456,20.12345]}'), 4326), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "RestaurantAdmins"
    (user_id, "createdAt", "updatedAt")
VALUES
    (2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Shopkeepers"
    (user_id, position, "createdAt", "updatedAt")
VALUES
    (3, ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-48.23456,20.12345]}'), 4326), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Customers"
    (user_id, "createdAt", "updatedAt")
VALUES
    (4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "ShoppingCarts"
    (customer_id, "createdAt", "updatedAt")
VALUES
    (4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Restaurants"
    (restaurant_admin_id, address, position, name, url_img, "createdAt", "updatedAt")
VALUES
    (5, 'cll falsa 123',
        ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-48.23455,20.12344]}'), 4326),
        'Home Burguer', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/descarga.png?alt=media&token=e5f6c6bb-ff90-41fe-9d68-637a5d2e78ce', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Restaurants"
    (restaurant_admin_id, address, position, name, url_img, "createdAt", "updatedAt")
VALUES
    (2, 'cra 23',
        ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Point","coordinates":[-48.23457,20.12346]}'), 4326),
        'El corral', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/large.jpg?alt=media&token=da8c75bf-3017-4fd1-8f29-ddfb9c11bec1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'monday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'tuesday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'wednesday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'thursday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'friday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'saturday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (1, 'sunday', '06:00:00', '21:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'monday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'tuesday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'wednesday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'thursday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'friday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'saturday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "DailySchedules"
    (restaurant_id, day, opening_hour, closing_time, "createdAt", "updatedAt")
VALUES
    (2, 'sunday', '08:00:00', '22:00:00', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Products"
    (name, description, url_img, "createdAt", "updatedAt")
VALUES
    ('producto 1', 'descripcion 1', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/ad576b549e.png?alt=media&token=9889d46c-99af-4e06-b16c-1978d0fa4f61', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Products"
    (name, description, url_img, "createdAt", "updatedAt")
VALUES
    ('producto 2', 'descripcion 2', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/ad576b549e.png?alt=media&token=9889d46c-99af-4e06-b16c-1978d0fa4f61', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Products"
    (name, description, url_img, "createdAt", "updatedAt")
VALUES
    ('producto 3', 'descripcion 3', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/ad576b549e.png?alt=media&token=9889d46c-99af-4e06-b16c-1978d0fa4f61', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Products"
    (name, description, url_img, "createdAt", "updatedAt")
VALUES
    ('producto 4', 'descripcion 4', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/ad576b549e.png?alt=media&token=9889d46c-99af-4e06-b16c-1978d0fa4f61', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Products"
    (name, description, url_img, "createdAt", "updatedAt")
VALUES
    ('producto 5', 'descripcion 5', 'https://firebasestorage.googleapis.com/v0/b/rappi-lite.appspot.com/o/ad576b549e.png?alt=media&token=9889d46c-99af-4e06-b16c-1978d0fa4f61', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (1, 1, 1.0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (2, 1, 1.0, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (3, 1, 1.0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (4, 1, 1.0, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (5, 1, 1.0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (1, 2, 1.0, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (2, 2, 1.0, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (3, 2, 1.0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (4, 2, 1.0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO "Offers"
    (product_id, restaurant_id, price, availability, "createdAt", "updatedAt")
VALUES
    (5, 2, 1.0, FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);