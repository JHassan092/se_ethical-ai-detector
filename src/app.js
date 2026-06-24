import express from "express";
import dotenv from "dotenv";

import verifyRoute from "./routes/verify.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/verify", verifyRoute);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
