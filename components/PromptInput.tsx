
'use client';

import fetchSuggestionFromChatGPT from "@/lib/fetchSuggestionFromChatGPT";
import { FormEvent, useState } from "react";
import useSWR from 'swr';

function PromptInput() {
    const [input, setInput] = useState("");

    const { data: suggestion, isLoading, mutate, isValidating } = useSWR('/api/suggestion', fetchSuggestionFromChatGPT, { revalidateOnFocus: false, });

    const loading = isLoading || isValidating;

    console.log(suggestion);

    const handlePrompt = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submitPrompt();
    };

    const submitPrompt = async (useSuggestion?: boolean) => {
        const inputPrompt = input;
        setInput("");

        console.log(inputPrompt);

        const p = useSuggestion ? suggestion : inputPrompt;

        const res = await fetch('/api/generateImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: p })
        });
        const data = await res.json();
    };

    return (
        <div className="m-10">
            <form className="flex flex-col md:flex-row shadow-md shadow-slate-400/10 border rounded-md md:divide-x" onSubmit={handlePrompt}>
                <textarea className="flex-1 p-4 outline-none rounded-md" placeholder={(loading && "Chat GPT thinking of a suggestion...") || suggestion || "Enter a Prompt"} value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className={`p-4 font-bold ${input ? 'bg-violet-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`} disabled={!input}>Generate</button>
                <button type="button" name="user_suggestion"  className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400" onClick={() => submitPrompt(true)}>Use Suggestion</button>
                <button type="button" name="suggestion" className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold" onClick={mutate}>New Suggestion</button>

            </form>
            {input && (
                <p className="italic pt-2 pl-2 font-light">
                    Suggestion: {" "}
                    <span className="text-violet-500">{loading ? "ChatGPT is thinking..." : suggestion}</span>
                </p>
            )}
        </div>
    );
}

export default PromptInput;