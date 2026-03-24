import { InferenceClient } from "@huggingface/inference";

// Create the client using your Vite environment variable
const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export const ValidateMessage = async (text) => {
    // --- LOCAL DEFENSE ---
    // If it's too short or lacks vowels, don't even call the API
    const isObviousGibberish = text.length < 10 || !/[aeiouy]/i.test(text);
    if (isObviousGibberish) {
        return { label: 'gibberish', score: 1 };
    }

    try {
        // Using the SDK method from your screenshot
        const output = await client.textClassification({
            model: "madhurjindal/autonlp-Gibberish-Detector-492513457",
            inputs: text,
            provider: "hf-inference",
        });

        // output is an array of objects: [{ label: 'clean', score: 0.99 }, ...]
        // They are usually sorted by highest score first.
        console.log("AI Result:", output);
        return output[0];

    } catch (error) {
        console.error("AI Validation Error:", error);
        // If API fails, we return 'clean' so real users aren't blocked by a server error
        return { label: 'clean', score: 1 };
    }
};