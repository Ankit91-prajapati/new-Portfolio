"use client";

import { ArrowBigUpIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY > 350) setIsVisible(true);
            if (window.scrollY < 350) setIsVisible(false);
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="fixed bottom-4 animate-pulse right-4">
            {isVisible && (
                <button
                    className="bg-blue-950/60 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center"
                    onClick={() => scrollToTop()}
                >
                    <ArrowBigUpIcon className="size-5" />
                </button>
            )}
        </div>
    );
};

export default ScrollTop;
