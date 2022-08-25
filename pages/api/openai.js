const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const beforePrompt = ``;
  const afterPrompt = ``;
  const breakPoint = `\n\n'''\n\n `;

  let prompt = `${beforePrompt} ${breakPoint} ${req.body.name} ${breakPoint} ${afterPrompt}`;

  console.log(prompt);

  const gptResponse = await openai.complet({
    engine: "text-davinci-002",
    prompt: `${prompt}`,
    maxTokens: 1500,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencePenalty: 0.5,
    bestOf: 1,
    n: 1,
  });

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};
