const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  // Make API call to ChatGPT
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: message,
    max_tokens: 50,
    temperature: 0.7,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY', // Replace with your OpenAI API key
    },
  });

  const reply = response.data.choices[0].text;

  res.json({ reply });
});

app.listen(3000, () => {
  console.log('Backend server is running on port 3000');
});
