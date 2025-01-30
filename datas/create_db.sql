BEGIN;

DROP TABLE IF EXISTS "clubs";
CREATE TABLE "clubs" (
   "id" SERIAL PRIMARY KEY,
   "club_name" VARCHAR(50) NOT NULL UNIQUE, 
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
451171   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "persons";
CREATE TABLE "persons" (
   "id" SERIAL PRIMARY KEY,
   "picture" TEXT,
   "rule" VARCHAR(50) NOT NULL,
   "shirt" VARCHAR,
   "poste" VARCHAR NOT NULL,
   "lastname" VARCHAR(50) NOT NULL,
   "firstname" VARCHAR(50) NOT NULL,
   "club_id" INT,   
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE CASCADE
);

DROP TABLE IF EXISTS "details";
CREATE TABLE "details" (
   "id" SERIAL PRIMARY KEY,   
   "height" INT,
   "birthdate" TEXT,
   "description" TEXT,
   "person_id" INT NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY ("person_id") REFERENCES "persons"("id") ON DELETE CASCADE
);4

DROP TABLE IF EXISTS "experiences";
CREATE TABLE "experiences" (
   "id" SERIAL PRIMARY KEY,
   "season_begin" INT NOT NULL CHECK ("season_begin" >= 1900 AND "season_begin" <= EXTRACT(YEAR FROM CURRENT_DATE)),
   "club" VARCHAR(100) NOT NULL,
   "details_id" INT NOT NULL, 
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY ("details_id") REFERENCES "details"("id") ON DELETE CASCADE
);

DROP TABLE IF EXISTS "rewards";
CREATE TABLE "rewards" (
   "id" SERIAL PRIMARY KEY,
   "season_begin" INT NOT NULL CHECK ("season_begin" >= 1900 AND "season_begin" <= EXTRACT(YEAR FROM CURRENT_DATE)),
   "championship" VARCHAR(100) NOT NULL,
   "reward" VARCHAR(100) NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "persons_has_rewards";
CREATE TABLE "persons_has_rewards" (
   "id" SERIAL PRIMARY KEY,
   "person_id" INT NOT NULL REFERENCES "persons"("id") ON DELETE CASCADE,
   "reward_id" INT NOT NULL REFERENCES "rewards"("id") ON DELETE CASCADE,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "matchs";
CREATE TABLE "matchs" (
   "id" SERIAL PRIMARY KEY,
   "meeting" DATE NOT NULL,
   "club_id" INT NOT NULL,
   "description" TEXT,   
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

   FOREIGN KEY ("club_id") REFERENCES "clubs"("id") ON DELETE CASCADE
);



COMMIT;
