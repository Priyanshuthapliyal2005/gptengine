// openai.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ apiKey: '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' });
const openai = new OpenAIApi(configuration);

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
