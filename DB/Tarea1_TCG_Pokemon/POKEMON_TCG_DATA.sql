USE POKEMON_TCG;

-- Dummy data for Deck table
INSERT INTO Deck (Name, Creation_Date, Description, Type, Size) VALUES
('Electric Deck', '2024-01-01', 'A deck full of electric type Pokemon', 'Electric', 60),
('Fire Deck', '2024-02-02', 'A deck full of fire type Pokemon', 'Fire', 60),
('Grass Deck', '2024-03-03', 'A deck full of grass type Pokemon', 'Grass', 60),
('Water Deck', '2024-04-04', 'A deck full of water type Pokemon', 'Water', 60),
('Normal Deck', '2024-05-05', 'A deck full of normal type Pokemon', 'Normal', 60),
('Ghost Deck', '2024-06-06', 'A deck full of ghost type Pokemon', 'Ghost', 60),
('Fighting Deck', '2024-07-07', 'A deck full of fighting type Pokemon', 'Fighting', 60),
('Psychic Deck', '2024-08-08', 'A deck full of psychic type Pokemon', 'Psychic', 60),
('Rock Deck', '2024-09-09', 'A deck full of rock type Pokemon', 'Rock', 60),
('Ground Deck', '2024-10-10', 'A deck full of ground type Pokemon', 'Ground', 60),
('Flying Deck', '2024-11-11', 'A deck full of flying type Pokemon', 'Flying', 60),
('Bug Deck', '2024-12-12', 'A deck full of bug type Pokemon', 'Bug', 60);

-- Dummy data for Player table
INSERT INTO Player (Player_Name, Player_Level, Registration_Date, Description, IsNpc, Winrate, Matches, Deck_List, Active_Deck) VALUES
('Ash', 10, '2024-01-01', 'A Pokemon trainer from Pallet Town', FALSE, 0.75, 20, 1, 1),
('Misty', 8, '2024-02-02', 'A Pokemon trainer from Cerulean City', FALSE, 0.60, 15, 2, 2),
('Brock', 15, '2024-03-03', 'A Pokemon trainer from Pewter City', FALSE, 0.80, 25, 3, 3),
('Gary', 12, '2024-04-04', 'A Pokemon trainer from Pallet Town', FALSE, 0.70, 18, 4, 4),
('May', 10, '2024-05-05', 'A Pokemon trainer from Petalburg City', FALSE, 0.75, 20, 5, 5),
('Max', 8, '2024-06-06', 'A Pokemon trainer from Petalburg City', FALSE, 0.60, 15, 6, 6),
('Dawn', 15, '2024-07-07', 'A Pokemon trainer from Twinleaf Town', FALSE, 0.80, 25, 7, 7),
('Iris', 12, '2024-08-08', 'A Pokemon trainer from Village of Dragons', FALSE, 0.70, 18, 8, 8),
('Cilan', 10, '2024-09-09', 'A Pokemon trainer from Striaton City', FALSE, 0.75, 20, 9, 9),
('Serena', 8, '2024-10-10', 'A Pokemon trainer from Vaniville Town', FALSE, 0.60, 15, 10, 10),
('Clemont', 15, '2024-11-11', 'A Pokemon trainer from Lumiose City', FALSE, 0.80, 25, 11, 11),
('Bonnie', 12, '2024-12-12', 'A Pokemon trainer from Lumiose City', FALSE, 0.70, 18, 12, 12);

-- Dummy data for Attack table
INSERT INTO Attack (Name, Description, Energy_Cost, Type, Damage) VALUES
('Thunder Shock', 'An electric type attack.', 2, 'Electric', 50),
('Flamethrower', 'A fire type attack.', 3, 'Fire', 60),
('Vine Whip', 'A grass type attack.', 1, 'Grass', 40),
('Water Gun', 'A water type attack.', 4, 'Water', 70),
('Pound', 'A normal type attack.', 2, 'Normal', 55),
('Shadow Ball', 'A ghost type attack.', 3, 'Ghost', 65),
('Karate Chop', 'A fighting type attack.', 1, 'Fighting', 45),
('Psybeam', 'A psychic type attack.', 4, 'Psychic', 75),
('Rock Throw', 'A rock type attack.', 2, 'Rock', 60),
('Earthquake', 'A ground type attack.', 3, 'Ground', 70),
('Peck', 'A flying type attack.', 1, 'Flying', 50),
('Bug Bite', 'A bug type attack.', 4, 'Bug', 80);

-- Dummy data for Card table
INSERT INTO Card (Name, Type, Description, Health_Points, Weakness, Pre_Evolution, Attack_ID) VALUES
('Pikachu', 'Electric', 'A popular electric type Pokemon.', 60, 'Ground', NULL, 1),
('Charizard', 'Fire', 'A powerful fire type Pokemon.', 120, 'Water', 'Charmeleon', 2),
('Bulbasaur', 'Grass', 'A grass type Pokemon.', 80, 'Fire', NULL, 3),
('Squirtle', 'Water', 'A water type Pokemon.', 150, 'Electric', NULL, 4),
('Jigglypuff', 'Normal', 'A normal type Pokemon.', 110, 'Fighting', NULL, 5),
('Gengar', 'Ghost', 'A ghost type Pokemon.', 130, 'Dark', 'Haunter', 6),
('Machamp', 'Fighting', 'A fighting type Pokemon.', 90, 'Psychic', 'Machoke', 7),
('Alakazam', 'Psychic', 'A psychic type Pokemon.', 170, 'Bug', 'Kadabra', 8),
('Geodude', 'Rock', 'A rock type Pokemon.', 60, 'Water', NULL, 9),
('Diglett', 'Ground', 'A ground type Pokemon.', 80, 'Water', NULL, 10),
('Pidgey', 'Flying', 'A flying type Pokemon.', 120, 'Electric', NULL, 11),
('Weedle', 'Bug', 'A bug type Pokemon.', 60, 'Fire', NULL, 12);

-- Dummy data for Effect table
INSERT INTO Effect (Name, Type, Duration, Buffs_Debuffs, Description) VALUES
('Paralysis', 'Debuff', 3, 'Speed Decrease', 'The target is paralyzed and may be unable to move'),
('Burn', 'Debuff', 2, 'Health Drain', 'The target is burned and loses health each turn'),
('Sleep', 'Debuff', 4, 'Cannot Attack', 'The target falls asleep and cannot attack'),
('Confusion', 'Debuff', 3, 'May Hurt Self', 'The target becomes confused and may hurt itself'),
('Poison', 'Debuff', 2, 'Health Drain', 'The target is poisoned and loses health each turn'),
('Freeze', 'Debuff', 3, 'Cannot Attack', 'The target is frozen and cannot attack'),
('Attract', 'Debuff', 4, 'May Not Attack', 'The target becomes infatuated and may not attack'),
('Leech Seed', 'Debuff', 2, 'Health Drain', 'The target loses health each turn, which is given to the user'),
('Toxic', 'Debuff', 3, 'Health Drain', 'The target is badly poisoned and loses more health each turn'),
('Curse', 'Debuff', 4, 'Health Drain', 'The target loses a quarter of its maximum health each turn'),
('Nightmare', 'Debuff', 2, 'Health Drain', 'If the target is asleep, it loses a quarter of its maximum health each turn'),
('Perish Song', 'Debuff', 3, 'Faints', 'Any Pokemon that hears this song faints in three turns unless it switches out of battle');

-- Dummy data for Deck_Card table
INSERT INTO Deck_Card (Card_ID, Deck_ID) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 2);

-- Dummy data for Effect_Activation table
INSERT INTO Effect_Activation (Effect_ID, Card_ID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12);

-- Dummy data for Match table
INSERT INTO _Match (Player1_ID, Player2_ID, Winner_ID, Total_Turns) VALUES
(1, 2, 1, 20),
(3, 4, 3, 25),
(5, 6, 5, 30),
(7, 8, 8, 22),
(9, 10, 9, 35),
(11, 12, 12, 28),
(1, 3, 1, 30),
(2, 4, 4, 22),
(5, 7, 5, 35),
(6, 8, 8, 28),
(9, 11, 9, 30),
(10, 12, 12, 22);

SELECT *
FROM Deck_Card
JOIN Card ON Deck_Card.Card_ID = Card.Card_ID
WHERE Deck_Card.Deck_ID = 1;
