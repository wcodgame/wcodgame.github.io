import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/footer.css";

class Footer extends React.Component<Nothing, Nothing> {
    render() {
        let showYear = "2025";
        const currentYear = new Date().getFullYear();
        if (currentYear !== 2025) {
            showYear += "-" + currentYear;
        }
        return <footer className="footer">
            <p>WCOD {showYear}. Сделано командой кодеров Wild Cats of The Dreamworld</p>
        </footer>
    }
}

export default Footer;