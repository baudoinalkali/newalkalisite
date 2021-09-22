import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ProgressBar = () => {
    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        setScrolled((y / height) * 100);
    }, [y]);

    return (
        <div className="scrollbar scroll-container sticky bottom-0 pt-6 -mb-6">
            <div className="indicator bg-alkali-500" style={{ width: `${scrolled}%`, height:"4px" }}></div>
        </div>
    );
};

export default ProgressBar;