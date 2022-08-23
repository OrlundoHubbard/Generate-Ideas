import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.idea),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(idea) {
  const capitalizedIdea = idea[0].toUpperCase() + idea.slice(1).toLowerCase();
  return `Suggest three names for a buisness.
  
  Idea: VR
  Names: Hyper, Vyper, Seeing is believing
  Idea: Finance
  Names: Money Matters, Money Time, Money Mine
  Animal: ${capitalizedIdea}
  Names:`;
}

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: "Brainstorm some ideas combining VR and fitness:",
//   temperature: 0.6,
//   max_tokens: 150,
//   top_p: 1,
//   frequency_penalty: 1,
//   presence_penalty: 1,
// });
