import "./contact.css";
import { Icons } from "../../constants/icons";
import { useState } from "react";
import { sendToTelegram } from "../../constants/bot";

const ContactPage = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await sendToTelegram(form);
        alert("Xabar yuborildi ✔️");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return <>
        <div className="contact_mee">
            <h1 className="h1">Contact Me</h1>

            <div className="contact_me">
                <h1>Have You Any Questions?</h1>
                <h5>I'm At your service</h5>

                <div className="contacts">
                    <div className="contact_div">
                        <a href="tel:+998918666028" className="telefon">
                            <Icons.phone />
                            <h1>Call Us On</h1>
                            <p>+998 91 866 60 28</p>
                        </a>

                        <a href="mailto:yt.behruzchik@gmail.com" className="telefon">
                            <Icons.email />
                            <h1>Email</h1>
                            <p>yt.behruzchik@gmail.com</p>
                        </a>

                        <a href="https://www.google.com/maps/search/?api=1&query=H59X%2BH2J%2C+Sherabad%2C+Xorazm+Region%2C+Uzbekistan"
                            target="_blank" className="telefon">
                            <Icons.location />
                            <h1>Location</h1>
                            <p>Urgench, Khorezm</p>
                        </a>

                        <a href="https://t.me/Behruzchik_im" target="_blank" className="telefon">
                            <Icons.telegram />
                            <h1>TG Contact</h1>
                            <p>@Behruzchik_im</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact_us">
                <h1>SEND ME AT EMAIL</h1>
                <h5>I'M VERY RESPONSIVE TO MESSAGES</h5>

                <div className="form">

                    <div className="name">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="subject"
                        placeholder="Subject"
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message">
                    </textarea>

                    <button className="send_btn" onClick={handleSubmit}>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ContactPage;
