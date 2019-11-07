import React, {Component} from "react";
import Header from "./Header";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="contact-section ">
                    <div className="row no-gutters justify-content-center text-center">
                        <div className="col-lg-4 col-md-8">
                            <p className="contact-section__text ">
                                Contact me and we will talk business, hopefully over a cup of
                                coffee!
                            </p>
                            <a target="_blank" rel="noopener noreferrer"
                               href="mailto:vladmuresan02@gmail.com"
                               className="contact-section__button"
                            >
                                E-MAIL
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/vl%C4%83du%C8%9B-florin-mure%C8%99an-750449151/"
                               className="contact-section__button"
                            >
                                LINKEDIN
                            </a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.github.com/vladmuresan02"
                               className="contact-section__button"
                            >
                                GITHUB
                            </a>
                            <a
                                href={`${process.env.PUBLIC_URL}/muresan_vladut_resume.pdf`}
                                download
                                className="contact-section__button"
                            >
                                DOWNLOAD MY RESUME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
