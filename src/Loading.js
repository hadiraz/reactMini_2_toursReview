import React from 'react'
import LoadingGif from "./assets/DualRing-1s-200px.gif"
function Loading() {
    console.log(document.querySelector("main"),1)
    return (
        <div className="loading">
            <img src={LoadingGif} alt="loading"/>
        </div>
    )
}

export default Loading
