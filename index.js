const app = require("./app");
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const DB_USER = "gltrunky";
const DB_PWD = "MC1KDi1JpSVjQpfY";
const DB_HOST = "cluster0-kkcso.mongodb.net";
const DB_NAME = "social_network";
const dbUrl = `mongodb+srv://${DB_USER}:${DB_PWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

//Connexion a la BDD
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log(`Connexion a la bdd ${DB_NAME} ok.`);
    } else {
      console.log(err.message);
    }
  }
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
