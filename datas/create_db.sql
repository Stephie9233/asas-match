DROP TABLE IF EXISTS "club";
CREATE TABLE "club" (
   "id_club" SERIAL PRIMARY KEY,
   "name" VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS "person";
CREATE TABLE "person" (
   "id_person" SERIAL PRIMARY KEY,
   "rule" VARCHAR(50) NOT NULL,
   "number" INT,
   "poste" INT NOT NULL,
   "name" VARCHAR(50) NOT NULL,
   "firstname" VARCHAR(50) NOT NULL,
   "club_id" INT NOT NULL,
   
   FOREIGN KEY("club_id") REFERENCES "club"("id_club")
);

DROP TABLE IF EXISTS "details";
CREATE TABLE "details" (
   "id_details" SERIAL PRIMARY KEY,
   "heigth" INT NOT NULL,
   "birthdate" DATE NOT NULL,
   "description" TEXT NOT NULL,
   "person_id" INT NOT NULL,

   FOREIGN KEY("person_id") REFERENCES "person"("id_person")
);

DROP TABLE IF EXISTS "experiences";
CREATE TABLE "experiences" (
   "id_xp" SERIAL PRIMARY KEY,
   "season" INT NOT NULL,
   "club" VARCHAR(100) NOT NULL,
   "details_id" INT NOT NULL,

   FOREIGN KEY("details_id") REFERENCES "details"("id_details")
);

DROP TABLE IF EXISTS "titre";
CREATE TABLE "titre" (
   "id_titre" SERIAL PRIMARY KEY,
   "season" INT NOT NULL,
   "titre" VARCHAR(100) NOT NULL,
   "details_id" INT NOT NULL,

   FOREIGN KEY("details_id") REFERENCES "details"("id_details")
);

DROP TABLE IF EXISTS "competition";
CREATE TABLE "competition" (
   "id_competition" SERIAL PRIMARY KEY,
   "meeting" DATE,
   "visitor" INT NOT NULL,
   "description" TEXT NOT NULL,
   "club_id" INT NOT NULL,

   FOREIGN KEY("club_id") REFERENCES "club"("id_club")
);
