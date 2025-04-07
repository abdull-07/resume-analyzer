import axios from "axios";  

const API_Token = import.meta.env.VITE_HUGGINGFACE_KEY;
const API_URL = import.meta.env.VITE_HUGGINGFACE_URL;

if (!API_Token) {
    console.error("Hugging Face API token is missing. Please check your .env file.");
}

export const getAiSuggestions = async (text) => {
    try {
        const response = await axios.post(
            API_URL,
            { inputs: text },
            {
                headers: {
                    Authorization: `Bearer ${API_Token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.data && response.data.generated_text) {
            return response.data.generated_text;
        } else {
            console.warn("Unexpected API response structure:", response.data);
            return "No suggestions available.";
        }
    } catch (error) {
        console.error("Error fetching AI suggestions:", error);
        return "Error fetching suggestions. Please try again.";
    }
};