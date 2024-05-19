import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
console.log(openai);

async function test() {
    const image = await openai.images.generate({
        prompt: "A cute baby sea otter"
    })

    console.log(image.data);
}

test();
