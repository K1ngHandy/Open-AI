import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
console.log(openai);

async function test() {
    try {
        const image = await openai.images.generate({
            prompt: "A cute baby sea otter",
            n: 1,
            size: '512x512'
        })
    
        console.log(image.data);
    } catch (error) {
        console.error('Error generating image', error);
    }
    
}

test();
