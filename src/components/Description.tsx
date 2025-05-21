import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/description.css";
import catLogo from "../assets/about-game.svg";
import {toast} from "react-toastify";

class Description extends React.Component<Nothing, Nothing> {
    render() {
        return <div className="description">
            <div>
                <h1>Новая, захватывающая игра</h1>
                <h3 className="poppins-extralight-italic">
                    где ты можешь почувствовать себя настоящим диким и дерзким котом-одиночкой, умным и дипломатичным Вожаком, несмышлёным и забавным котёнком, а может и озлобленным на мир духом Тьмы?
                </h3>
                <button onClick={() => toast.warning("Игра пока что в разработке, следите за нашим ВК")}>Играть</button>
            </div>
            <div className="cat-logo">
                <img src={catLogo} />
            </div>
        </div>
    }
}

export default Description;