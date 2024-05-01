import React from 'react';
import Cards from '/src/components/about/related-research/cards.jsx';
import '/src/components/about/related-research/RelatedCards.css';

const RelatedCards = () => {
    const researchTopics = [
        "Metrocommon x 2050",
        "Housing Submarkets"
    ];

    return (
        <div className="related-research">
            <h2>Related Research</h2>
            <hr />
            <div className="research-cards-container">
                {researchTopics.map(topic => <Cards key={topic} title={topic} />)}
            </div>
        </div>
    );
};

export default RelatedCards;
