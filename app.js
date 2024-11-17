import "dotenv/config";

import express from "express";

import { router } from "./app/router.js";

const app = express();

// Configure le view engine
app.set("view engine", "ejs"); // => pour préciser quel view engine on utilise
app.set("views", "./app/views"); // => pour préciser à EJS dans quel dossier trouver les fichiers .ejs lors des res.render()

// Configure le dossier public
app.use(express.static("./public"));

// Configurer l'application
app.use(router);






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
