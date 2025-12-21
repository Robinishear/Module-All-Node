// ================================
// STEP 1: users table create
// * ekhane user info thakbe
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(15) NOT NULL
);
// * id → auto increment primary key
// * username → empty hote parbe na



// ================================
// STEP 2: poste table create
// * ekhane users er post thakbe
CREATE TABLE poste (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INT REFERENCES users(id)
);
// * user_id → users table er id ke reference kore
// * mane holo: kon post kon user er



// ================================
// STEP 3: (optional) table drop
// * puro poste table delete hoye jabe
-- drop table poste;



// ================================
// STEP 4: users data insert
INSERT INTO users (username) VALUES
('akash'),
('bhstash'),
('shagor'),
('nodi');
// * id auto generate hobe → 1,2,3,4



// ================================
// STEP 5: poste data insert (with user_id)
INSERT INTO poste (title, user_id) VALUES
('Enjoying a sunny day with Akash! ☀️', 2),
('Batash just shared an amazing recipe! 🍳', 1),
('Exploring adventures with Sagor. 🌟', 4),
('Nodi''s wisdom always leaves me inspired. 📖', 4);
// * protita post er sathe user_id দেওয়া
// * ei post konta kon user er



// ================================
// STEP 6: INNER JOIN (JOIN = INNER JOIN)
// * sudhu oi row asbe jekhane match ache
select p.id, p.title, u.username
from poste as p
join users as u on p.user_id = u.id;



// ================================
// STEP 7: INNER JOIN (same as JOIN)
select p.id, p.title, u.username
from poste as p
inner join users as u on p.user_id = u.id;
// * JOIN আর INNER JOIN same



// ================================
// STEP 8: LEFT JOIN
// * poste er sob row asbe
// * user na thakle NULL
select *
from poste as p
left join users as u on p.user_id = u.id;



// ================================
// STEP 9: RIGHT JOIN
// * users er sob row asbe
// * post na thakle NULL
select *
from poste as p
right join users as u on p.user_id = u.id;



// ================================
// STEP 10: FULL JOIN
// * poste + users duita table er sob row
select *
from poste as p
full join users as u on p.user_id = u.id;



// ================================
// STEP 11: insert post without user_id
// * ei post er kono user nai
INSERT INTO poste (id, title) VALUES
(5, 'Enjoying a sunny day with Akash! ☀️');



// ================================
// STEP 12: CROSS JOIN
// * protita post er sathe protita user
// * condition lage na
select *
from poste
cross join users;
// * total row = poste row × users row



// ================================
// STEP 13: NATURAL JOIN
// * je column name duita table e same
// * auto join hoy
select *
from poste
natural join users;
// * production e use na kora best (risky)
