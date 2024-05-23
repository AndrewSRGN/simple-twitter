import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for handling scroll events.
 *
 * @param lastElementRef {ref} - A ref to the last element in the list.
 * @param callback {Function} - A callback function to be executed when the last element is visible.
 * @param condition {boolean} - A condition to determine if the last element is visible.
 * @returns {boolean} - A boolean value indicating if the last element is visible.
 */
export const useScroll = (lastElementRef, callback, condition = true) => {
    const observer = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        const options = {
            root: document,
            threshold: 0
        }

        const observerCallback = ([target]) => {
            if (target.isIntersecting && condition) {
                callback();
                setIsIntersecting(true);
            } else {
                setIsIntersecting(false);
            }
        }
        observer.current = new IntersectionObserver(observerCallback, options);
        observer.current.observe(lastElementRef.current);

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        }
    }, [condition]);

    return isIntersecting;
}