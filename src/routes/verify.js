import express from "express";

import { runRuleChecks } from "../services/ruleChecker.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { text, context, metadata } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      error: "Missing or invalid 'text' field",
    });
  }

  const ruleIssues = runRuleChecks(text);

  return res.json({
    allowed: ruleIssues.length === 0,
    risk_level: ruleIssues.length > 0 ? "medium" : "low",
    issues: ruleIssues,
    message: "Rule-based checks completed",
  });
});

export default router;
