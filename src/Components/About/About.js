import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import './About.css';
const About = () => {
    const ht = {
        height: '5px'
    }
    return (
        <section className="about py-3 about-bg mt-3 text-white" id="about">
            <div className="container-lg py-4">
                <div className="row justify-content-center">
                    <div className="col-lg-8 d-flex justify-content-center">
                        <div className="section-title text-center w-25">
                            <h2 className="fw-bold mb-5 header-border ">About Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h3 className="fs-4 mb-3">Mern Stack Developer</h3>
                            <p className="text-muted">I am Tajuddin Ahmed.
                                I have completed BSC Engineering from Sylhet Engineering College.
                                I am majoring in CSE. I have done 6 projects by react js and mongodb .
                                Node js was the backend server for every project</p>
                        </div>
                        <div className="row text-center text-uppercase my-3">
                            <div className="col-sm-4">
                                <div className="fact-item">
                                    <h4 className="fs-1 fw-bold">6</h4>
                                    <p className="text-muted">projects completed</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="fact-item">
                                    <h4 className="fs-1 fw-bold">50</h4>
                                    <p className="text-muted">happy clients</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="fact-item">
                                    <h4 className="fs-1 fw-bold">10</h4>
                                    <p className="text-muted">positive reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-lg-12 d-flex align-items-center">
                                <Link to="/files/myfile.pdf" className="btn btn-danger" target="_blank" download>Download CV</Link>
                                <div className="social-links">
                                    <a target="_blank" href="https://www.linkedin.com/in/tajuddin-ahmed/" className="px-3 text-decoration-none fs-4 text-danger"><FaLinkedin /></a>
                                    <a target="_blank" href="https://www.facebook.com/tajuddin.ahmed.733" className="px-3 text-decoration-none fs-4 text-danger"><FaFacebook /></a>
                                    <a target="_blank" href="https://github.com/Tajuddin-Ahmed" className="px-3 text-decoration-none fs-4 text-danger"><FaGithub /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-item mb-4 mt-5 mt-md-0">
                            <h3 className="fs-6">Html</h3>
                            <div className="progress" style={ht}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className="fs-6">Css</h3>
                            <div className="progress" style={ht}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className="fs-6">Javascript</h3>
                            <div className="progress" style={ht}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className="fs-6">php</h3>
                            <div className="progress" style={ht}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className="skill-item mb-4">
                            <h3 className="fs-6">React Js</h3>
                            <div className="progress" style={ht}>
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;