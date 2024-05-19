import {useState} from "react";

/**
 * Custom hook for executing multiple asynchronous operations with loading and error state management.
 * @param {Array<Function>} callbacks Array of callback functions, each of which should be asynchronous and change the state.
 * @returns {[fetchData:function, isLoading: boolean, error: string | null]}
 */

export const useFetch = (callbacks) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            await Promise.all(callbacks.map(callback => callback()));
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }


    return [fetchData, isLoading, error];
}