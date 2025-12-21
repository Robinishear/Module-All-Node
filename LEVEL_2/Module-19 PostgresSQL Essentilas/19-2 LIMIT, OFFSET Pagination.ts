// ? 1. pagination || limit
// * ai command diye amra database theke shudhu limited number of data dekhte pari
// * example: select * from table_name limit 5;
// * ai code 5000 data thakleo, sudhu 5 ta row dekhabe
// * jodi amra chai je specific country er data dekhte, tahole
select *
from table_name
where country in ('bangladesh', 'india', 'nepal')
limit 5;
// * ai khane sudhu oi 3 country theke 5 ta data dekhabe
// * jodi limit 3 dei, tahole 3 ta data show hobe

// ? 2. offset
// * offset diye amra data er starting point change korte pari
// * example: select * from table_name limit 5 offset 3;
// * ai code er mane holo:
// * database theke 5 ta data show korbe, kintu 3 number row theke start korbe
// * mane 4th row theke shuru kore 5 ta data show korbe

// * jodi multiple pages dekhte chai, tokhon offset = limit * page_number use kori
-- page 1
select * from table_name limit 5 offset 5 * 0;
-- page 2
select * from table_name limit 5 offset 5 * 1;
-- page 3
select * from table_name limit 5 offset 5 * 2;
-- page 4
select * from table_name limit 5 offset 5 * 3;
-- page 5
select * from table_name limit 5 offset 5 * 4;

// * ei bhabe amra easily pagination implement korte pari
// * limit = prottek page e kotogula row dekhabo
// * offset = kon row theke shuru korbo
