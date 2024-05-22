import { useEffect, useRef } from "react";

/**
 * Observer
 *
 * @param ref - ref for observing element
 * @param canLoad - condition for loading
 * @param isLoading - loading state
 * @param callback - callback function
 */
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    console.log("useObserver", ref.current, isLoading, canLoad);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (!ref.current) {
            return;
        }
        if (observer.current) {
            observer.current.disconnect();
        }
        const observerCallback = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(observerCallback);
        observer.current.observe(ref.current);
    }, [isLoading])
}