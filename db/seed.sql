create table pokemon (
    poke_db_id serial primary key,
    poke_api_id int,
    name varchar(100),
    front_sprite varchar(100),
    back_sprite varchar(100),
    hp int,
    attack int,
    speed int,
    type_1 varchar(50),
    type_2 varchar(50)
);

create table pokemon_battle_user (
    user_id serial primary key,
    username varchar(50),
    password text
);

create table team_table (
    user_id int references pokemon_battle_user(user_id),
    team_name varchar(50),
    pokemon_db_id int
);


insert into pokemon_battle_user (
    username,
    password
)values
('KRISHNA', 'laskdjfionoifn2oi3nf90j30inv0h89gh'),
('PRABHUPADA', '097898udhfuhiusb089fag98b'),
('stuart', '90d9nof2089n0fjopa90ufh79');