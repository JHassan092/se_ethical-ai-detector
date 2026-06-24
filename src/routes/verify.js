import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { text, context, metadata } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      error: "Missing or invalid 'text' field",
    });
  }

  return res.json({
    allowed: true,
    risk_level: "low",
    issues: [],
    message: "Verification module not yet implemented",
  });
});

export default router;
