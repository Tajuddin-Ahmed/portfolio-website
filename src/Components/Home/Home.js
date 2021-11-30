import React from 'react';
import './Home.css';
import profile from '../../images/propic.png'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
const Home = () => {
    return (
        <div className="bg-image mb-5">
            <div className="container p-3">
                <div className="row">
                    <div className="col col-md-2">
                        <Link className="text-decoration-none text-danger" to="#home">TAJUDDIN</Link>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex justify-content-end">
                            <Nav.Link as={HashLink} className="text-decoration-none pe-4 text-danger" to="/#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="text-decoration-none pe-4 text-danger" to="/#about">About</Nav.Link>
                            <Nav.Link as={HashLink} className="text-decoration-none pe-4 text-danger" to="#projects">Projects</Nav.Link>
                            <Nav.Link as={HashLink} className="text-decoration-none pe-4 text-danger" to="#contact">Contact</Nav.Link>
                            <Nav.Link as={HashLink} className="text-decoration-none text-danger" to="#portfolio" >Portfolio</Nav.Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center pt-5">
                <div className="col-md-12">
                    <img className="rounded-circle mb-3" width="200" src={profile} alt="" />
                    <h2>HI, I AM TAJUDDIN</h2>
                    <h6 className="text-danger">MERN STACK DEVELOPER</h6>
                    <div className="py-3">
                        <a target="_blank" href="https://www.facebook.com/tajuddin.ahmed.733" className="px-3 text-decoration-none fs-4 text-dark"> <FaFacebook /> </a>
                        <a target="_blank" href="https://www.linkedin.com/in/tajuddin-ahmed/" className="px-3 text-decoration-none fs-4 text-dark"> <FaLinkedin /> </a>
                        <a target="_blank" href="https://github.com/Tajuddin-Ahmed" className="px-3 text-decoration-none fs-4 text-dark"> <FaGithub /> </a>
                    </div>
                    <Link to="#contact" className="text-decoration-none">
                        <button className="btn btn-danger">Contact Me</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;