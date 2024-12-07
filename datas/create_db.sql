BEGIN;

DROP TABLE IF EXISTS "clubs";
CREATE TABLE "club" (
   "id_club" INT PRIMARY KEY,
   "club_name" VARCHAR(50) NOT NULL, 
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ
);

DROP TABLE IF EXISTS "persons";
CREATE TABLE "persons" (
   "id_person" INT PRIMARY KEY,
   "rule" VARCHAR(50) NOT NULL,
   "shirt" INT,
   "poste" INT NOT NULL,
   "name" VARCHAR(50) NOT NULL,
   "firstname" VARCHAR(50) NOT NULL,
   "club_id" INT NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ
   
   FOREIGN KEY("club_id") REFERENCES "clubs"("id_club")
);

DROP TABLE IF EXISTS "details";
CREATE TABLE "details" (
   "id_details" INT PRIMARY KEY,
   "heigth" INT,
   "birthdate" DATE,
   "description" TEXT,
   "person_id" INT NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ

   FOREIGN KEY("person_id") REFERENCES "persons"("id_person")
);

DROP TABLE IF EXISTS "experiences";
CREATE TABLE "experiences" (
   "id_experiences" INT PRIMARY KEY,
   "season_begin" INT NOT NULL,
   "club" VARCHAR(100) NOT NULL,
   "details_id" INT NOT NULL, 
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ

   FOREIGN KEY("details_id") REFERENCES "details"("id_details")
);

DROP TABLE IF EXISTS "rewards";
CREATE TABLE "rewards" (
   "id_reward" INT PRIMARY KEY,
   "season_begin" INT NOT NULL,
   "championship" VARCHAR NOT NULL,
   "reward" VARCHAR(100) NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ
);

DROP TABLE IF EXISTS "persons_has_rewards";
CREATE TABLE "persons_has_rewards" (
   "id" INT PRIMARY KEY,
   "id_person" INT NOT NULL REFERENCES "persons"("id_person") ON DELETE CASCADE,
   "id_reward" INT NOT NULL REFERENCES "rewards"("id_reward") ON DELETE CASCADE,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ
)

DROP TABLE IF EXISTS "matchs";
CREATE TABLE "matchs" (
   "id_championship" INT PRIMARY KEY,
   "meeting" DATE NOT NULL,
   "club_id" INT NOT NULL,
   "description" TEXT,   
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ

   FOREIGN KEY("club_id") REFERENCES "clubs"("id_club")
);

COMMIT;
