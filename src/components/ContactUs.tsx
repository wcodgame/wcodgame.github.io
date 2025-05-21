import type {Nothing} from "../utils/nothing.ts";
import * as React from "react";
import "../style/contactUs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactUs extends React.Component<Nothing, {status: string}> {
    constructor(props: Nothing) {
        super(props);
        this.state = { status: "" };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        data.append("access_key", "7f43730b-0688-4471-bc8f-364de52ef828");
        data.append("subject", "Лэндинг");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });

        if (res.ok) {
            toast.success("Спасибо! Ваше сообщение отправлено");
            form.reset();
        } else {
            toast.error("Ошибка отправки. Попробуйте ещё раз.");
        }
    };

    render() {
        return <div className="contact-us">
            <p className="contact-us-label">Свяжитесь с нами</p>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Введите ваше имя</label>
                <input id="name" type="text" name="name" required />
                <label htmlFor="email">Введите почту</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Введите сообщение</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    }
}

export default ContactUs;