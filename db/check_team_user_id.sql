select * from team t 
join pokemon_battle_user u on t.user_id = u.user_id
where u.user_id = $1;