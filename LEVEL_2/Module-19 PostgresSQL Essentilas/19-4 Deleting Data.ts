//  easy explanation
// delete from table_name where condition → single/multiple row delete
// where clause → kon row delete hobe ta specify kore
// in (...) → multiple specific row delete korte use hoi
// delete without where → sob row delete, caution required
// select before delete → check kore nite parbe kon row delete hobe


// ? 1. basic select
// * delete korar age select kore data check kora best practice
select * from students;
// * ai command run korle sob students er data dekhte parbe

// ================================
// ? 2. single row delete
// * jodi amra kono ek row delete korte chai jekhane condition match kore
delete from students
where student_id = 1;
// * ai code er mane holo:
// * students table er oi row jekhane student_id = 1
// * seta database theke remove hoye jabe

// ================================
// ? 3. multiple row delete (condition use kore)
// * jodi ek shathe onek row delete korte chai
delete from students
where grade = 'c';
// * ai code er mane holo:
// * students table er sob row jekhane grade = 'c'
// * sob row database theke remove hoye jabe

// ================================
// ? 4. multiple row delete by id
// * jodi specific multiple row delete korte chai id onujayi
delete from students
where student_id in (2, 3, 4);
// * ai code er mane holo:
// * student_id 2, 3, 4 row sob delete hobe
// * baki row unaffected thakbe

// ================================
// ? 5. delete without condition
// * caution: ei command sob row delete kore, table empty hoye jabe
delete from students;
// * ei command run korar age, sobsomoy backup nite hobe



