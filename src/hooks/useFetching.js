import {useEffect, useState} from "react";

/**
 * Hook for executing multiple asynchronous operations with loading and error state management.
 * @param {Array<Function>} callbacks Array of callback functions, each of which should be asynchronous and сhange the state.
 * @returns {[boolean, Error | null]} Array of states: isLoading (loading) and error (error).
 */

export const useFetching = (callbacks) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetching = async () => {
            try {
                setIsLoading(true);
                await Promise.all (
                    callbacks.map(callback => callback())
                );
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetching();

        return () => {
            isMounted = false;
            callbacks.length = 0; //If component is unmounted, remove all callbacks
        }
    }, [callbacks]);

    return [isLoading, error];
}