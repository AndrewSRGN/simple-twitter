import {useState} from "react";

/**
 * Custom hook for executing asynchronous operations with loading and error state management.
 * It supports both single and multiple callback functions.
 *
 * @param {Function|Array<Function>} callbacks - A callback function or an array of callback functions,
 * each of which should be asynchronous and change the state.
 * @return {[fetchData:function, isLoading: boolean, error: string | null]} - An array containing the fetchData function, isLoading boolean, and error string or null.
 */
export const useFetch = (callbacks) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setError(null);
        setIsLoading(true);
        try {
            if (Array.isArray(callbacks)) {
                await Promise.all(callbacks.map(callback => callback()));
            } else {
                await callbacks();
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            console.log("Data fetched.");
            setIsLoading(false);
        }
    }

    return [fetchData, isLoading, error];
}

