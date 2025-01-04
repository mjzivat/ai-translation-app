import OpenAI from "openai"






export async function fetchTranslation({translationText, languageChoice}) {

    const messages = [
        {
            role: "system",
            content: "You are a polyglot/expert translator. The user will give you some text, in English, to translate and a language choice to translate the text to. You will return a translation from English to the chosen language."
        },
        {
            role: "user",
            content: `Please translate ${translationText} to ${languageChoice}`
        }
    ]
    try {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        })
        const response = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: messages
        })
        console.log(response)
        return response.choices[0].message.content
    } catch (err) {
        console.log('Error:', err)
    }
}


// apiKey: env.OPENAI_API_KEY