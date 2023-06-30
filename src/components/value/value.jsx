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


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="v-image-container">
                        <img src="./planning.png" alt="" />
                    </div>
                </div>


                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Unlocking the potential</span>
                    <span className="primaryText">with some powerful features of श्रमिकMANTRA</span>

                    <Accordion className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}>

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
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
