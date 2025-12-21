// ================================
// GROUP BY Explained
// * GROUP BY use kora hoy data ke ek ba ekadhik column onujayi group korte
// * normally aggregate functions er sathe use hoy (SUM, COUNT, AVG, MAX, MIN)
// * mane holo, ek column onujayi same type data ek sath group kore calculation kora

// ================================
// ? 1. basic select
// * GROUP BY use korar age data check kora best practice
select * from table_name;
// * ai command run korle sob table_name er data dekha jabe

// ================================
// ? 2. simple GROUP BY
// * jodi amra customer onujayi total amount dekhte chai
select customer, sum(amount) as total_amount
from table_name
group by customer;
// * ai code er mane holo:
// * table_name er data customer onujayi group kora hobe
// * protiti customer er amount jog kora hobe sum(amount) diye

// ================================
// ? 3. GROUP BY with COUNT
// * jodi customer onujayi koyta row ache dekhte chai
select customer, count(*) as total_rows
from table_name
group by customer;
// * ai code er mane holo:
// * customer onujayi group kora hobe
// * protiti group e koyta row ache ta count() diye dekhano hobe