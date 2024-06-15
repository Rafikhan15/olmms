const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "myuser",
  port: 5432,
  password: "123456",
  database: "lunch_menu_db",
});

async function dbConnect() {
  client.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to postgresSQL database");
  });
}

module.exports = { dbConnect, client };
