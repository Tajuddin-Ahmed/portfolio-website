import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jbn9jpg', 'template_8t163ka', form.current, 'user_418zPfeF3XlTkyKSJC2B3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="contact py-5 border-top contact-bg text-white" id="contact">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <div className="section-title text-center w-25">
                            <h2 className="fw-bold mb-5 header-border">Contact Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="content-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <FaEnvelope />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Email</h3>
                                <p className="text-muted">tajuddinsec1@gmail.com</p>
                            </div>
                        </div>
                        <div className="content-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <FaPhoneAlt />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Phone</h3>
                                <p className="text-muted">+8801733761952</p>
                            </div>
                        </div>
                        <div className="content-item d-flex mb-3">
                            <div className="icon fs-4 text-danger">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Visit Office</h3>
                                <p className="text-muted">Mejhortila, Sylhet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <input type="text" name='name' placeholder="Your Name" className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                                    </div>
                                    <div className="col-lg-6 mb-4">
                                        <input type="text" name="email" placeholder="Your Email" className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <input type="text" name="subject" placeholder="Subject" className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <textarea rows="5" type="text" name="message" placeholder="Your Message" className="form-control form-control-lg fs-6 border-0 shadow-sm"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-danger px-3">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;