import { useEffect, useState } from "react";

/*
Usage: const windowSize = useWindowSize();
*/

interface IWindowSizeState {
    height: number | undefined;
    width: number | undefined;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<IWindowSizeState>({
        height: undefined,
        width: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}
