import { RefObject, useEffect, useState } from "react";

export default function useElementOnScreen(
    ref: RefObject<Element>,
    rootMargin = "-30px",
) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, [isIntersecting]);
    return isIntersecting;
}