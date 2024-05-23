import {  useState } from "react";

/**
 * Custom hook for executing asynchronous operations with loading and error state management.
 * It supports both single and multiple callback functions.
 *
 * @param {Function|Array<Function>} callbacks - A callback function or an array of callback functions.
 * @return {[fetchData: () => Promise<response | response[] | null>, isLoading: boolean, error: string | null]} - An array containing the fetchData function, isLoading boolean, and error string or null.
 */
export const useFetch = (callbacks) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Fetches data from the provided callback functions.
     *
     * @param args - The arguments to pass to the callback functions.
     * @returns {PromiseLike<response | response[] | null>} - A promise that resolves to the response or an array of responses. If an error occurs, it resolves to null.
     */
    const fetchData = async (args) => {
        setError(null);
        setIsLoading(true);

        let callbackResponse = null;
        
        try {
            if (Array.isArray(callbacks)) {
                callbackResponse = [];
                for (let i = 0; i < callbacks.length; i++) {
                    const response = await callbacks[i](args);
                    callbackResponse.push(response);
                }
            } else {
                callbackResponse = await callbacks(args);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }

        return callbackResponse;
    }

    return [fetchData, isLoading, error];
}

