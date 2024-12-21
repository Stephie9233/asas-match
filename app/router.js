// Import de l'usine à routers
import { Router } from "express";

// Import du controlleur
import { mainController } from "./controllers/mainController.js";
import { adminHomeController } from "./controllers/adminHomeController.js";
// Création d'un router
export const router = Router();

// === Paramétrage du router ===


// --- User / ---
router.get("/", mainController.renderHome);

// --- Admin /admin ---
router.get("/admin", adminHomeController.renderHomePage);