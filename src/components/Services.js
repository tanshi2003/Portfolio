import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faChartLine, faCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <FontAwesomeIcon icon={faPaintBrush} />
                            <div className="text">Web Design</div>
                            <p>I provide: Responsive Web Design, User Experience (UX) Design, Custom Web Development, E-commerce Solutions, CMS Integration, Website Maintenance.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <FontAwesomeIcon icon={faChartLine} />
                            <div className="text">Graphic Design</div>
                            <p>I offer a range of creative solutions tailored to your needs. From web design to branding, I'm here to bring your vision to life.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <FontAwesomeIcon icon={faCode} />
                            <div className="text">Apps Design</div>
                            <p>I encompasses both the user interface(UI) & user experience(UX). The overall style of the app, including things like the colour scheme, font selection, and the types of buttons and widgets which will use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
