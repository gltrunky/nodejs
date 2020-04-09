const app = require("./app");
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
const { DB_NAME, DB_HOST, DB_PWD, DB_USER } = process.env;
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

// TEST DE LIASON AVEC DB MOOGOSE

// const Schema = mongoose.Schema;
// const UserSchema = Schema({
//   name: String,
//   age: Number,
// });

// const User = mongoose.model("User", UserSchema);
// User.findById("5e8ee93b1c9d440000c58394").then((user) => console.log(user));
