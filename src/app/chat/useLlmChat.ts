import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  apiKey: process.env.API_KEY
})

const useLlmChat = () => {
  const ask = async () => {
    const completion = await openai.chat.completions.create({
        model: "qwen-plus",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "你是谁？" }
        ],
    });
    console.log(JSON.stringify(completion))
    return
  }

  return {
    ask
  }
}

export default useLlmChat