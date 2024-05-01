import React from 'react';
import '/src/components/about/related-research/cards.css';

const Cards = ({ title }) => {
    return (
        <div className="research-card">
            {title}
        </div>
    );
};

export default Cards;
