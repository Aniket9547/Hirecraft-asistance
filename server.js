const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Chatbot logic
app.post('/chat', (req, res) => {
  const message = req.body.message?.toLowerCase().trim();

  let reply = "🤖 Sorry, I didn't understand that. Try saying 'hello', 'help', or 'joke'.";

  if (!message) {
    return res.json({ reply });
  }

  if (/hello|hi/.test(message)) {
    reply = "👋 Hi! I'm HireCraft's assistant. How can I assist you today?";
  } else if (/how are you|how r u/.test(message)) {
    reply = "😄 I'm doing great! Thanks for asking. How about you?";
  } else if (/bye/.test(message)) {
    reply = "👋 Goodbye! Talk to you soon.";
  } else if (/hey/.test(message)) {
    reply = "😎 Heyyy! Now we’re talking like Gen Z!";
  } else if (/help/.test(message)) {
    reply = "🛠️ I can help you with hiring, job listings, and company info. Just ask!";
  } else if (/your name/.test(message)) {
    reply = "🤖 I'm HireBot, your assistant from HireCraft!";
  } else if (/joke/.test(message)) {
    reply = "😂 Why don’t recruiters ever play hide and seek? Because good luck hiding when they’ve got your LinkedIn!";
  } else if (/what can you do/.test(message)) {
    reply = "💼 I can answer your questions, help with job applications, or just chat!";
  } else if (/thank you|thanks/.test(message)) {
    reply = "You're welcome! 😊 Always happy to help.";
  } else if (/good morning/.test(message)) {
    reply = "🌅 Good morning! Ready to kick-start your day with HireCraft?";
  } else if (/good night/.test(message)) {
    reply = "🌙 Good night! Sleep well, and I’ll be here when you wake up.";
  } else if (/weather/.test(message)) {
    reply = "☀️ I'm not sure about the weather, but I can tell you it’s always a good day for job hunting!";
  } else if (/tell me a fact/.test(message)) {
    reply = "🤓 Did you know? The first online job board was Monster.com, created in 1994!";
  } else if (/who are you/.test(message)) {
    reply = "🤖 I'm HireBot, your personal assistant at HireCraft. Ready to help you find the best talent!";
  } else if (/job|career/.test(message)) {
    reply = "💼 Looking for a job? Let me know what role you're interested in, and I can assist you!";
  } else if (/how do i apply/.test(message)) {
    reply = "📝 To apply for a job, just head over to the 'Careers' section on the HireCraft site. Need a link?";
  } else if (/your age/.test(message)) {
    reply = "🤖 Age is just a number. But I’m eternally young, serving you with the latest job trends!";
  } else if (/hirecraft/.test(message)) {
    reply = "🏢 HireCraft is a platform that connects top talent with amazing companies. We make hiring easier!";
  } else if (/team/.test(message)) {
    reply = "👥 Our team is passionate about helping people find great jobs and companies hire top talent.";
  } else if (/music/.test(message)) {
    reply = "🎶 I can’t play music, but I can help you find the perfect playlist for your workday!";
  } else if (/gaming/.test(message)) {
    reply = "🎮 Gaming? I’m not a gamer, but I know companies that are hiring developers for game design!";
  } else if (/favorite color/.test(message)) {
    reply = "🎨 My favorite color is blue, but I’m also fond of HireCraft's signature green!";
  } else if (/inspiration/.test(message)) {
    reply = "💡 Inspiration is everywhere! Here’s one: ‘Success is not the key to happiness. Happiness is the key to success.’";
  } else if (/quote/.test(message)) {
    reply = "📜 Here’s a motivational quote: 'The only way to do great work is to love what you do.' – Steve Jobs";
  } else if (/what do you think/.test(message)) {
    reply = "🤔 I think HireCraft is a great place for both job seekers and employers to connect!";
  } else if (/can you tell me a secret/.test(message)) {
    reply = "🤫 I have a secret… HireCraft is the future of hiring. Shhh, don't tell anyone!";
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
