import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/contactUs.css";

class ContactUs extends React.Component<Nothing, Nothing> {
    render() {
        return <div className="contact-us">
            <p className="contact-us-label">Свяжитесь с нами</p>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="bb67ce6b-d869-4f47-9791-e01540403a58" />
                <input type="hidden" name="subject" value="Из WCOD" />
                <label htmlFor="name">Введите ваше имя</label>
                <input id="name" type="text" name="name" />
                <label htmlFor="email">Введите почту</label>
                <input id="email" type="email" name="email" />
                <label htmlFor="message">Введите сообщение</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    }
}

export default ContactUs;