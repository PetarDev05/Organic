// Dependencies
import dotenv from "dotenv"
import { app } from "./app.js";
import { connectDB } from "./src/db/connect.db.js";

// dotenv configuration
dotenv.config({
  path: "./.env",
});

// PORT 
const port = process.env.PORT || 3000;

// Connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on: http://localhost:${port}...`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
    process.exit(1);
  });