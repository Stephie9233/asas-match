// Import de l'usine à routers
import { Router } from "express";

// Import du controlleur
import { mainController } from "./controllers/mainController.js";
import { adminHomeController } from "./controllers/adminHomeController.js";
import { adminClubsController } from "./controllers/adminClubsController.js";
// Création d'un router
export const router = Router();

// === Paramétrage du router ===


// --- User / ---
router.get("/", mainController.renderHome);

// --- Admin /admin ---
router.get("/admin", adminHomeController.renderHomePage);
router.get("/clubs", adminClubsController.renderClubsPage);
router.get("/ajouter", adminClubsController.addClub);
router.post("/clubs", adminClubsController.verifyDatas);
router.get("/club/:id", adminClubsController.getDetails);
router.post("/club/:id/membre/ajouter", adminClubsController.addMember);
