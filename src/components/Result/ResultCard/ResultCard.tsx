import React, { FC } from 'react';

const ResultCard: FC = () => {

    return (
        <div className="result-card">
            <div className="result-card_header">
                <label className="result-card_date"> date</label>
                <label className="result-card_source"> source</label>
            </div>
            <div className="result-card_title">Title</div>
            <div className="result-card_news-type">type</div>
            <div className="result-card_pic">img</div>
            <div className="result-card_text">text</div>
            <button className="result-card_btn">Читать в источнике</button>
        </div>
    );
}

export default ResultCard;
