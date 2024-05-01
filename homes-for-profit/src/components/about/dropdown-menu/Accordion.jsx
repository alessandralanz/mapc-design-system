import React from 'react';
import AccordionItem from './AccordionItem.jsx';

const Accordion = () => {
    return (
        <div className="accordion">
            <h2>About the Report</h2>
            <hr />
            <AccordionItem title="Where can I download the data?">
                Content for download data.
            </AccordionItem>
            <AccordionItem title="Who should I contact with questions?">
                Content for contact information.
            </AccordionItem>
        </div>
    );
};

export default Accordion;
