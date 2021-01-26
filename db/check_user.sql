select * from pokemon_battle_user
where lower(username) = lower(${username});