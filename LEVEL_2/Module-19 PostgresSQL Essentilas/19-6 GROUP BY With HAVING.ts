// ================================
// GROUP BY With HAVING Explained
// * GROUP BY diye data group kora hoy, HAVING diye oi group er upor filter apply kora hoy
// * normally WHERE row level filter er jonno, HAVING group level filter er jonno

// ================================
// ? 1. basic select
// * GROUP BY with HAVING use korar age data check kora best practice
select * from table_name;
// * ai command run korle sob table_name er data dekha jabe

// ================================
// ? 2. GROUP BY with aggregate
// * jodi amra customer onujayi total amount dekhte chai
select customer, sum(amount) as total_amount
from table_name
group by customer;
// * ai code er mane holo:
// * table_name er data customer onujayi group kora hobe
// * protiti customer er amount jog kora hobe sum(amount) diye

// ================================
// ? 3. GROUP BY with HAVING
// * jodi amra sudhu oi customer dekhte chai jader total amount 200 er beshi
select customer, sum(amount) as total_amount
from table_name
group by customer
having sum(amount) > 200;
// * ai code er mane holo:
// * customer onujayi group kora hobe
// * tarpor sudhu oi group gulo show hobe jader sum(amount) > 200
// * baki group gulo ignore kora hobe

// ================================
// ? 4. multiple column GROUP BY with HAVING
// * jodi amra customer and order_type onujayi group korte chai ebong filter apply korte chai
select customer, order_type, sum(amount) as total_amount
from table_name
group by customer, order_type
having sum(amount) > 100;
// * ai code er mane holo:
// * same customer er same order_type ek group e asbe
// * tarpor sudhu oi group gulo show hobe jader sum(amount) > 100
