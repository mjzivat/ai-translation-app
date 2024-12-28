import parrotImg from "../assets/parrot.png"
import worldmapImg from "../assets/worldmap.png"
import React from "react"

export default function Header() {
    return (
        <header>
            <img src={parrotImg} alt="image of cartoon parrot" className="parrot" />
            <div className="header-text">
                <h1>PollyGlot</h1>
                <p className="header-tagline">Perfect Translation Every Time</p>
            </div>
        </header>

    )
}


// className="header-title"