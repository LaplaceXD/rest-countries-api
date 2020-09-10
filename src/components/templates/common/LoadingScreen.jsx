import React, { useRef, useEffect } from "react";

function LoadingScreen({ dependency }) {
    const loadingRef = useRef();

    useEffect(() => {
        if (!dependency) {
            loadingRef.current.classList.value = "loading isRevealed";
        } else {
            loadingRef.current.classList.value = "loading";
            setTimeout(() => {
                loadingRef.current.classList.value = "loading isRemoved";
            }, 250);
        }
    }, [dependency]);

    return (
        <main className="loading" ref={loadingRef}>
            <h1 className="loading__label">Loading...</h1>
            <i className="fa fa-spinner fa-spin loading__buffer" />
        </main>
    );
}

export default LoadingScreen;
