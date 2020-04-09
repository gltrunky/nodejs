const app = require("./app");
const PORT = process.env.PORT || 3000;

//Connexion a la BDD

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
