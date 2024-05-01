import React, { useState } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className={`chevron ${isOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default AccordionItem;
