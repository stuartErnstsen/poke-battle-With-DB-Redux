select * from team 
where lower(team_name) = lower($1);