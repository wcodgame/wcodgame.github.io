import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/description.css";
import catLogo from "../assets/about-game.svg";
import {TypeAnimation} from "react-type-animation";

class Description extends React.Component<Nothing, Nothing> {
    render() {
        return <div className="description">
            <div>
                <h1>Новая, захватывающая игра</h1>
                <h3 className="poppins-extralight-italic">
                    <TypeAnimation
                        sequence={[
                            'про необычных, лесных котов',
                            2000,
                            'где вы исследуете уникальный мир',
                            2000,
                            'в которой вы, будучи бойцом, сражаетесь',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h3>
            </div>
            <div className="cat-logo">
                <img src={catLogo} />
            </div>
        </div>
    }
}

export default Description;