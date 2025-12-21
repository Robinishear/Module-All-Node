// ? 1. null check
// * ai command diye amra check korte pari kon kon email null
// * jodi kono email null thake, tahole seta ber korte use korbo
select * from table_name where email is null;
// * jodi email null na thake, tahole seta ber korbo
select * from table_name where email is not null;
// * ei bhabe amra sob data check korte pari
// * null o non-null sob ek shathe dekha jabe

// ? 2. null coalesce
// * ai command diye amra email column e null value thakle, seta replace korte pari
// * replace value hobe 'not provided', ar jodi value thake tahole original email show hobe
select coalesce(email, 'not provided') as email from table_name;

// * ekadhik column dekhte hole
select first_name, age, coalesce(email, 'not provided') as email from table_name;
// * ei bhabe first_name, age, email sob ek shathe dekhabe
// * jodi email null thake, tahole 'not provided' show korbe
