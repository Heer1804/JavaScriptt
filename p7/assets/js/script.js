const quotes = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      author: "William Butler Yeats"
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky"
    },
    {
      text: "Whether you think you can or you think you can’t, you’re right.",
      author: "Henry Ford"
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas Edison"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "If you can dream it, you can achieve it.",
      author: "Zig Ziglar"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      author: "Walt Whitman"
    },
    {
      text: "Opportunities don't happen, you create them.",
      author: "Chris Grosser"
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      text: "The harder the conflict, the more glorious the triumph.",
      author: "Thomas Paine"
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    }
  ];

  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteText').textContent = quote.text;
    document.getElementById('quoteAuthor').textContent = `— ${quote.author}`;
  }
  