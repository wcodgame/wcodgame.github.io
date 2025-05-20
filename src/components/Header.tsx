import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/header.css";
import {FaVk} from "react-icons/fa6";

type Props = {
    vk: string;
};

class Header extends React.Component<Props, Nothing> {
    render() {
        return (
            <header className="header">
                <h1>WCOD</h1>
                <ul className="poppins-regular">
                    <a href="/">Главная</a>
                </ul>
                <ul className="icons">
                    <a href={this.props.vk}><FaVk size={35} className="vk" /></a>
                </ul>
            </header>
        )
    }
}

export default Header;