import React from 'react';
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { Fade } from 'react-reveal';


const Contact = () => {

    return (
        <section className="c-wrapper">
            <div className="padding innerWidth flexCenter c-container">

                <div className="flexColStart c-left">
                    <span className='mainhead'>Our Contact</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>We are always ready to help you by providing the best services<br />
                        believe a good balance to live can make your life better.</span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <Fade top distance="10%" duration={2000}>

                        <div className='flexStart row'>

                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <MdCall size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span>Call</span>
                                        <span>012 234 345</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* second mode */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span>Chat</span>
                                        <span>012 234 345</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                        </Fade>

                        {/* second row */}

                        <Fade Bottom distance="10%" duration={2000}>

                        <div className='flexStart row'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span>Video Call</span>
                                        <span>012 234 345</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">VideoCall Now</div>
                            </div>

                            {/* second mode */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>

                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span>Message</span>
                                        <span>012 234 345</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

                <Fade right distance="10%" duration={1500}>

                <div className="flexCenter c-right">
                    <div className="c-image-container">
                        <img src="./contact.png" alt='' />
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    );
};

export default Contact;
