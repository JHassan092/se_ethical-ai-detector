export function runRuleChecks(text) {
  const issues = [];

  if (text.length < 10) {
    issues.push({
      type: "text_too_short",
      messgae: "Text is too short to evaluate meaningfully.",
    });
  }

  if (text.length > 5000) {
    issues.push({
      type: "text_too_long",
      message: "Text exceeds recommended length for safe evaluation.",
    });
  }

  const bannedPhrases = [
    "kill yourself",
    "i hate all",
    "you should die",
    "bomb",
    "shoot up",
  ];

  for (const phrase of bannedPhrases) {
    if (text.toLowerCase().includes(phrase)) {
      issues.push({
        type: "disallowed_phrase",
        phrase,
        message: `Detected harmful or dangerous phrase: "${phrase}`,
      });
    }
  }

  const harmfulPatterns = [/(?:\bkill\b|\bshoot\b|\bbomb\b)/i];

  for (const pattern of harmfulPatterns) {
    if (pattern.test(text)) {
      issues.push({
        type: "harmful_pattern",
        pattern: pattern.toString(),
        message: "Detected potentially harmful language.",
      });
    }
  }
  return issues;
}
