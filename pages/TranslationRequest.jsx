import frFlagImg from "../assets/fr-flag.png"
import jpnFlagImg from "../assets/jpn-flag.png"
import spFlagImg from "../assets/sp-flag.png"
import React from "react"
import {
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { fetchTranslation } from "../api"

export async function action({ request }) {
    const formData = await request.formData()
    const translationText = formData.get("translation-text")
    const languageChoice = formData.get("language")
    try {
        const translatedText = await fetchTranslation({translationText, languageChoice})
        return redirect(`/result?userText=${translationText}&responseText=${translatedText}`)
    } catch(err) {
        return err.message
    }
}

export default function TranslationRequest() {
    return (
        <div>
            <Form
                method="post"
                className="request-form"
            >
                <label htmlFor="translation-text">Text to translate 👇</label>
                <textarea 
                    name="translation-text"
                    placeholder="How are you?"
                />
                
                <label htmlFor="language">Select language 👇</label>
                <fieldset name="language">
                    <div>
                        <input
                            type="radio"
                            name="language"
                            id="french"
                            value="french"
                        />
                        <label htmlFor="french">
                            French
                            <span>
                                <img src={frFlagImg} alt="image of french flag" />
                            </span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="language"
                            id="spanish"
                            value="spanish"
                        />
                        <label htmlFor="spanish">
                            Spanish
                            <span>
                                <img src={spFlagImg} alt="image of spanish flag" />
                            </span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="language"
                            id="japanese"
                            value="japanese"
                        />
                        <label htmlFor="japanese">
                            Japanese
                            <span>
                                <img src={jpnFlagImg} alt="image of japanese flag" />
                            </span>
                        </label>
                    </div>
                </fieldset>
                <button>Translate</button>
            </Form>
        </div>
    )
}

