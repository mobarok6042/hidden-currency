import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_3bv5fz4",   // Get this from EmailJS
            "template_llepcdc",  // Get this from EmailJS
            form.current,
            "WPWFKNXHUDpN0Khhg"    // Get this from EmailJS
        )
            .then((result) => {
                alert("Message sent!");      // Success message
                e.target.reset();
            }, (error) => {
                alert("Failed to send message."); // Error message
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="">
                <input className="input w-96 bg-slate-700 text-center" type="text" name="user_name" placeholder="Your Name" required />
                <br />
                <br />
                <input className="input w-96 bg-slate-700 text-center"type="email" name="user_email" placeholder="Your Email address" required />
                <br />
                <br />
                <textarea className="textarea  w-96  bg-slate-700 text-center" name="message" placeholder="Your Message" required />
                <br />
                <br />
                <button className="btn btn-outline btn-secondary font-bold text-black border-b-8 border-6 border-success text-2xl w-54 h-14 hover:bg-primary hover:text-white">Send mail</button>
            </form>
            <button className="btn btn-outline btn-secondary font-bold text-black border-b-8 border-6 border-success text-2xl w-54 h-14 hover:bg-primary hover:text-white mt-20">
                <a
                href="https://wa.me/8801610102698?text=Hi%20I%20just%20visited%20your%20portfolio!"
                target="_blank"
                rel="noopener noreferrer"
            >
                Message us on WhatsApp
            </a>
            </button>

        </div>

    );
};

export default ContactForm;