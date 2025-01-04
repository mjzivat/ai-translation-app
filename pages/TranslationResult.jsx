import React from "react"
import {useLoaderData, redirect, Form} from "react-router-dom"

export function loader({ request }) {
    const userText = new URL(request.url).searchParams.get("userText")
    const responseText = new URL(request.url).searchParams.get("responseText")
    const resultData = {
        userText: userText,
        responseText: responseText
    }
    return resultData
}

export function action() {
    return redirect("/")
}

export default function TranslationResult() {
    const resultData = useLoaderData()
    
    return (
        <Form
                method="post"
                className="request-form"
            >
            <label htmlFor="translation-text">Original text 👇</label>
            <textarea 
                disabled
                value={resultData.userText}
            />
            <label htmlFor="translation-text">Your translation 👇</label>
            <textarea 
                disabled
                value={resultData.responseText}
            />
            <button>Start Over</button>
        </Form>
    )
}

            // <p className="label-text">Original text 👇</p>
            // <div className="text-container">
            //     <p>user text here</p>
            // </div>
            // <p className="label-text">Your translation 👇</p>
            // <div className="text-container">
            //     <p>user text here</p>
            // </div>