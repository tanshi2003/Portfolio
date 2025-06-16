import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact Me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll be happy to answer your questions and set up a meeting with you.</p>
                        
                        <div className="icons">
                            <div className="row">
                                <FontAwesomeIcon icon={faUser} />
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Tanshi Khandelwal</div>
                                </div>
                            </div>

                            <div className="row">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Amroha, Uttar Pradesh, India</div>
                                </div>
                            </div>

                            <div className="row">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">
                                        <a href="mailto:tanshikhandelwal03@gmail.com">tanshikhandelwal03@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <FontAwesomeIcon icon={faLanguage} />
                                <div className="info">
                                    <div className="head">Language Known</div>
                                    <div className="sub-title">Hindi, English</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-menu">
                            <ul>
                                <li><a href="https://github.com/tanshi2003"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href="https://www.linkedin.com/in/tanshi-khandelwal-30a1b8209"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="https://www.instagram.com/_khandelwaltanshi_"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://twitter.com/Tanshi_03"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="column right">
                        <div className="text">Message me</div>
                        <form action="mailto:tanshikhandelwal03@gmail.com">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
