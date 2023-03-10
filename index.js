const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
import dotenv from 'dotenv'

// Open AI Configuration
const configuration = new Configuration({
    organization: "org-GxupgWJMGHrcsirlfRUCRDOm",
    apiKey: "dotenv.config().parsed.OPENAI_API_KEY",
});
const openai = new OpenAIApi(configuration);

// Express Configuration
const app = express()
const port = process.env.PORT || 3080;

app.use(bodyParser.json())
app.use(cors())
app.use(require('morgan')('dev'))


// Routing 

// Primary Open AI Route
app.post('/', async (req, res) => {
	const { message, currentModel, temperature } = req.body;
	const response = await openai.createCompletion({
		model: `${currentModel}`,// "text-davinci-003",
		prompt: `${message}`,
		max_tokens: 100,
		temperature: 0.7,
	  });
	res.json({
		message: response.data.choices[0].text,
	})
});

// Start the server
app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
});