const  { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
//   apiKey: "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",
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

setTimeout(async () => {
    console.log('开始请求...')
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt('cat'),
        temperature: 0.6,
      }).then(res => {
        console.log(`响应：${res}`)
        console.log(`响应：${res.data.choices[0].text}`)
      }).catch(err => {
        console.log(`错误：${err}`)
      });
    //   console.log(`${animal}响应：${completion.data.choices[0].text}`)
}, 2000)

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}