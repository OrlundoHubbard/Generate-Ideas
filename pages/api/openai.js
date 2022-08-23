const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    // Prompt values
    const beforePrompt = ``;
    const afterPrompt = ``;
    const breakPoint = `\n\n'''\n\n `;

    // construct the prompt
    let prompt = `${beforePrompt} ${breakPoint} ${req.body.name} ${breakPoint} ${afterPrompt}`;

    // Log prompt
    console.log(prompt);
}
