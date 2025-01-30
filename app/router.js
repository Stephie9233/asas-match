// Import de l'usine à routers
import { Router } from "express";

// Import du controlleur
import { mainController } from "./controllers/mainController.js";
import { adminHomeController } from "./controllers/adminHomeController.js";
//import { adminClubsController } from "./controllers/adminClubsController.js";
import { adminPersonsController } from "./controllers/adminPersonsController.js";

// Création d'un router
export const router = Router();

// === Paramétrage du router ===


// --- User / ---
router.get("/", mainController.renderHome);

// --- Admin /admin ---
router.get("/admin", adminHomeController.renderHomePage);

// --- Membre ---
router.get("/membres", adminPersonsController.renderMembersPage);

// --- Routes get ---
router.get("/membre/search", adminPersonsController.renderMembersSearch);
router.get("/membre/ajouter", adminPersonsController.renderAddMember);
// --- Routes get ---
// --- Club ---
//router.get("/clubs", adminClubsController.renderClubsPage);
// --- Create
//router.get("/ajouter", adminClubsController.addClub);
// --- Read
//router.get("/club/:id", adminClubsController.getDetails);

// --- Membres ---
// --- Read
//router.get("/membre/:id", adminPersonsController.getDetails);


// --- Routes post ---

// --- Club ---
// --- Update
//router.post("/clubs", adminClubsController.verifyDatas);
// --- Delete
/* TODO : router.post('/club/:id/archiver') */


// --- Membre---
// --- Create
router.post("/membre/add", adminPersonsController.addMember);

// --- Update
router.post("/membre/:id/modifier", adminPersonsController.setDetails);
// --- Delete
/* TODO : router.post('/membre/:id/archiver')*/