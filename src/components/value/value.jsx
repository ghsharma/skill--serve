import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "./value.css";
import data from '../../utils/accordion';
import Fade from 'react-reveal/Fade';


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <Fade left distance="100%" duration={1500}>
                <div className="v-left">
                    <div className="v-image-container">
                        <img src="./planning.png" alt="" />
                    </div>
                </div>
                </Fade>


                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Unlocking the potential</span>
                    <span className="primaryText">with some powerful features of श्रमिकMANTRA</span>

                    <Accordion className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}>

                    <Fade right distance="100%" duration={1500}>


                        {data.map((item, i) => {
                            return (
                                <AccordionItem
                                    className="accordianItem" key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })
                        }
                    </Fade>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
