// Dependencies
import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./src/db/connect.db.js";

// admin
import { createAdmin } from "./src/utils/createAdmin.utils.js";

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
  .then(async () => {
    await createAdmin();
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
    process.exit(1);
  });
