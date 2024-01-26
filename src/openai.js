// openai.js
const { OpenAIAPI } = require('openai');

const apiKey = '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';
const openai = new OpenAIAPI({ key: apiKey });

export async function sendMsgToOpenAI(message) {
  const response = await openai.createCompletion({
    engine: 'text-davinci-003',
    prompt: message,
    max_tokens: 256,
    temperature: 0.7,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  return response.data.choices[0].text;
}
