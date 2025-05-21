import type {Nothing} from "./utils/nothing.ts";
import * as React from "react";
import Header from "./components/Header.tsx";
import Description from "./components/Description.tsx";
import ContactUs from "./components/ContactUs.tsx";
import Footer from "./components/Footer.tsx";
import {ToastContainer} from "react-toastify";

class App extends React.Component<Nothing, Nothing> {
    render() {
        return (
            <>
                <ToastContainer position="top-center" />
                <Header vk={"https://vk.com/wcod_cats"} />
                <Description />
                <ContactUs />
                <Footer />
            </>
        );
    }
}

export default App
