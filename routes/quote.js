const express = require("express");
const router = express.Router();

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    sayer: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    sayer: "John Lennon",
  },
  {
    quote: "Get busy living, or get busy dying.",
    sayer: "Stepehen King",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    sayer: "Dalai Lama",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    sayer: "Winston Churchill",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    sayer: "Albert Einstein",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    sayer: "Alan Kay",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    sayer: " Wayne Gretzky",
  },
  {
    quote: "You can’t always trust the people you want to trust.",
    sayer: "The Haunted Mask",
  },
  {
    quote: "Believe you can and you're halfway there.",
    sayer: "Theodore Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    sayer: "Sam Levenson",
  },
  {
    quote: "If you want to live a happy life, tie it to a goal, not to people or things",
    sayer: "Albert Einstein",
  },
  {
    quote: "You don't have to be great to start, but you have to start to be great",
    sayer: "Zig Ziglar",
  },
  {
    quote: " don't stop when I'm tired. I stop when I'm done.",
    sayer: "David Goggins",
  },
  {
    quote: "I think, therefore I am.",
    sayer: "René Descartes",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    sayer: "Mahatma Gandhi",
  },
  {
    quote: "I have a dream.",
    sayer: "Martin Luther King Jr.",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    sayer: "Winston Churchill",
  },
  {
    quote: "What we think, we become.",
    sayer: "Buddha",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    sayer: "Charles R. Swindoll",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    sayer: "Mae West",
  },
  {
    quote: "One who has conquered himself is a friend to himself. One who has failed to do so is his own enemy.",
    sayer: "Lord Krishna",
  },
  {
    quote: "Man is made by his belief. As he believes, so he is.",
    sayer: "Lord Krishna",
  },
  {
    quote: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    sayer: "Lord Krishna",
  },
  {
    quote: "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.",
    sayer: "Lord Krishna",
  },
];

/* GET quote */
router.get("/", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.status(200);
  res.set("Content-Type", "application/json");
  res.json({
    randomQuote: quotes[index].quote,
    quoteSayer: quotes[index].sayer,
  });
});

module.exports = router;
