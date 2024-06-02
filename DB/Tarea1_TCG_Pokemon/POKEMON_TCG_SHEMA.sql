DROP SCHEMA IF EXISTS POKEMON_TCG;
CREATE DATABASE POKEMON_TCG;
USE POKEMON_TCG;

-- Tabla Deck
CREATE TABLE Deck (
    Deck_ID INT AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Creation_Date DATE,
    Description VARCHAR(300),
    Type VARCHAR(30),
    Size INT,
    PRIMARY KEY (Deck_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Player
CREATE TABLE Player (
    Player_ID INT AUTO_INCREMENT,
    Player_Name VARCHAR(50) NOT NULL,
    Player_Level INT,
    Registration_Date DATE,
    Description VARCHAR(300),
    IsNpc BOOLEAN,
    Winrate DECIMAL(5, 2),
    Matches INT,
    Deck_List INT,
    Active_Deck INT,
    PRIMARY KEY (Player_ID),
    FOREIGN KEY (Active_Deck) REFERENCES Deck(Deck_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Attack
CREATE TABLE Attack (
    Attack_ID INT AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Description VARCHAR(300),
    Energy_Cost INT,
    Type VARCHAR(30),
    Damage INT,
    PRIMARY KEY (Attack_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Card
CREATE TABLE Card (
    Card_ID INT AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Type VARCHAR(30),
    Description VARCHAR(500),
    Health_Points INT,
    Weakness VARCHAR(30),
    Pre_Evolution VARCHAR(50),
    Attack_ID INT,
    PRIMARY KEY (Card_ID),
    FOREIGN KEY (Attack_ID) REFERENCES Attack(Attack_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Effect
CREATE TABLE Effect (
    Effect_ID INT AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    Type VARCHAR(30),
    Duration INT,
    Buffs_Debuffs VARCHAR(300),
    Description VARCHAR(300),
    PRIMARY KEY (Effect_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Deck_Card
CREATE TABLE Deck_Card (
    Deck_Card_ID INT AUTO_INCREMENT,
    Card_ID INT,
    Deck_ID INT,
    PRIMARY KEY (Deck_Card_ID),
    FOREIGN KEY (Card_ID) REFERENCES Card(Card_ID),
    FOREIGN KEY (Deck_ID) REFERENCES Deck(Deck_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Effect_Activation
CREATE TABLE Effect_Activation (
    Effect_Activation_ID INT AUTO_INCREMENT,
    Effect_ID INT,
    Card_ID INT,
    PRIMARY KEY (Effect_Activation_ID),
    FOREIGN KEY (Effect_ID) REFERENCES Effect(Effect_ID),
    FOREIGN KEY (Card_ID) REFERENCES Card(Card_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla Match
CREATE TABLE _Match (
    Match_ID INT AUTO_INCREMENT,
    Player1_ID INT,
    Player2_ID INT,
    Winner_ID INT,
    Total_Turns INT,
    PRIMARY KEY (Match_ID),
    FOREIGN KEY (Player1_ID) REFERENCES Player(Player_ID),
    FOREIGN KEY (Player2_ID) REFERENCES Player(Player_ID),
    FOREIGN KEY (Winner_ID) REFERENCES Player(Player_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
