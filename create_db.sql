CREATE TABLE club(
   id_club INT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id_club),
   UNIQUE(name)
);

CREATE TABLE person(
   id_person INT,
   rule VARCHAR(50) NOT NULL,
   number INT,
   poste INT NOT NULL,
   name VARCHAR(50) NOT NULL,
   firstname VARCHAR(50) NOT NULL,
   club_id INT NOT NULL,
   PRIMARY KEY(id_person),
   UNIQUE(number),
   UNIQUE(name),
   FOREIGN KEY(club_id) REFERENCES club(id_club)
);

CREATE TABLE details(
   id_details INT,
   heigth INT NOT NULL,
   birthdate DATE NOT NULL,
   description TEXT NOT NULL,
   person_id INT,
   PRIMARY KEY(id_details),
   FOREIGN KEY(person_id) REFERENCES person(id_person)
);

CREATE TABLE experiences(
   id_xp INT,
   season INT NOT NULL,
   club VARCHAR(100) NOT NULL,
   details_id INT NOT NULL,
   PRIMARY KEY(id_xp),
   FOREIGN KEY(details_id) REFERENCES details(id_details)
);

CREATE TABLE titre(
   id_titre INT,
   season INT NOT NULL,
   titre VARCHAR(100) NOT NULL,
   details_id INT NOT NULL,
   PRIMARY KEY(id_titre),
   FOREIGN KEY(details_id) REFERENCES details(id_details)
);

CREATE TABLE competition(
   id_competition INT,
   meeting DATE,
   visitor INT NOT NULL,
   description TEXT NOT NULL,
   club_id INT NOT NULL,
   PRIMARY KEY(id_competition),
   UNIQUE(meeting),
   FOREIGN KEY(club_id) REFERENCES club(id_club)
);
