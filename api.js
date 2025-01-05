import OpenAI from "openai"

export async function fetchTranslation({translationText, languageChoice}) {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY

    const messages = [
        {
            role: "system",
            content: "You are a polyglot/expert translator. The user will give you some text, in English, to translate and a language choice to translate the text to. You will translate the text from English to the language choice and return the translation. Example conversation - user: Please translate Hello to French. assistant: Bonjour."
        },
        {
            role: "user",
            content: `Please translate ${translationText} to ${languageChoice}`
        }
    ]
    try {
        const openai = new OpenAI({
            apiKey,
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