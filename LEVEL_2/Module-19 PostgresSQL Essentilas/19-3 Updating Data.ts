// ================================
// ? 1. single row update
// * ekta row update korte select korte hobe jekhane condition match kore
update table_name
set first_name = 'robin'
where id = 1;
// * ai code er mane holo:
// * table_name er oi row jekhane id = 1
// * tar first_name ke 'robin' diye replace korbe
// * check korte: select * from table_name where id = 1;

// ================================
// ? 2. multiple column update (single row)
// * ek shathe ekadhik column update korte pari
update table_name
set first_name = 'robin', age = 25, email = 'robin@example.com'
where id = 1;
// * ek line e first_name, age, email update holo
// * jekhane id = 1

// ================================
// ? 3. multiple row update (same value)
// * jodi sob selected row ek shathe same value update korte chai
update table_name
set status = 'active'
where country in ('bangladesh','india','nepal');
// * ai code er mane holo:
// * jekhane country bangladesh, india, nepal
// * sob row er status ek shathe active hobe

// ================================
// ? 4. multiple row update (different value)
// * jodi ek shathe onek row update korte chai, mysql e case use korte pari
update table_name
set status = case
    when country = 'bangladesh' then 'active'
    when country = 'india' then 'pending'
    when country = 'nepal' then 'inactive'
    else status
end
where country in ('bangladesh','india','nepal');
// * ai code er mane holo:
// * jekhane country bangladesh → status active
// * jekhane country india → status pending
// * jekhane country nepal → status inactive
// * baki sob row original status thakbe

// ================================
// ? 5. multiple row update by id
// * dhoro amader table_name e row ache id 1, 2, 3
// * amra chachhi ei sob row ek shathe update korte

// 5a. same value update
update table_name
set status = 'active'
where id in (1, 2, 3);
// * ai code er mane holo:
// * table_name er jekhane id 1, 2, 3
// * sob row er status = active hobe

// 5b. different value update (id onujayi)
update table_name
set status = case
    when id = 1 then 'active'
    when id = 2 then 'pending'
    when id = 3 then 'inactive'
    else status
end
where id in (1, 2, 3);
// * ai code er mane holo:
// * id = 1 → status active
// * id = 2 → status pending
// * id = 3 → status inactive
// * baki row original status thakbe

// ================================
// ? 6. multiple column + multiple row update
// * jodi ek shathe onek row + onek column update korte chai
update table_name
set 
    first_name = case
        when id = 1 then 'robin'
        when id = 2 then 'shuvo'
        when id = 3 then 'jamal'
        else first_name
    end,
    status = case
        when id = 1 then 'active'
        when id = 2 then 'pending'
        when id = 3 then 'inactive'
        else status
    end
where id in (1, 2, 3);
// * ai code er mane holo:
// * id 1 → first_name robin, status active
// * id 2 → first_name shuvo, status pending
// * id 3 → first_name jamal, status inactive
// * baki row original value thakbe


// ?. 7 multiple row update example
// * table_name: students
// * amra grade update korte chai student_id 1, 2 er jonno

update students
set grade = 'c'
where student_id in (1, 2);
// * ai code er mane holo:
// * students table e jekhane student_id 1 o 2
// * tader grade 'c' diye replace korbe

// ? check korte
select * from students where student_id in (1, 2);
// * ai command run korle dekhte parbe grade update hoyeche kina
