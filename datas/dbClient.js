// Import des variables du .env (permet d'utiliser process.env)
import "dotenv/config";

// import du module pg
import pg from "pg";

// Création d'un client Postgres vers notre BDD locale
const client = new pg.Client(process.env.PG_URL);

// Connexion du client vers la BDD
// Création d'un tunnel de connexion vers la BDD
// client est un objet JS (que l'on va utiliser dans les controlleurs) qui permet de faire des requêtes SQL vers la BDD
client.connect();

// Au choix : export par défaut
export default client;

