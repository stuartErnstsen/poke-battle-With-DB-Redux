insert into pokemon_battle_user (
    username,
    password
) values (
    ${username},
    ${hash}
)
returning *;