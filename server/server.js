import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./src/db/connect.db.js";
import { createAdmin } from "./src/utils/createAdmin.utils.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}...`);
    });
  })
  .then(async () => {
    await createAdmin();
  })
  .catch((error) => {
    console.log("Error connecting to DB", error);
    process.exit(1);
  });
