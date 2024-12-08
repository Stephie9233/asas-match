// Import de l'usine à routers
import { Router } from "express";

// Import du controlleur
import { mainController } from "./controllers/mainController.js";

// Création d'un router
export const router = Router();

// === Paramétrage du router ===


// --- Routes / ---
router.get("/", mainController.renderHome);