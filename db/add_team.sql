insert into team (
    user_id,
    team_name
) values (
    $1,
    $2
)
returning *;