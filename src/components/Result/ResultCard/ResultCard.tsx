import React from 'react';
import type { myDocument } from '../../../reducers/searchReducer'
import '../../../styles/ResultCard.css'


interface ResultCardProps {
  data?: myDocument[] | null;
  title?: string;
  content: string;
  date: string;
  url: string;
  source: string;

}
const ResultCard: React.FC<ResultCardProps> = ({ title , content, date, url, source}) => {
    const formatDate = (inputDate: string) => {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    const formattedDate = formatDate(date);


    return (
        <div className="result-card">
            <div className="result-card_header">
                <label className="result-card_date">{formattedDate}</label>
                <label className="result-card_source">
                    <a href={url}>{source}</a> </label>
            </div>
            <div className="result-card_title">{title ?? "No title found"}</div>
            <div className="result-card_news-type">type</div>
            <div className="result-card_pic">img</div>
            <div className="result-card_text">{content}</div>
            <button className="result-card_btn">Читать в источнике</button>
            <div className="result-words">words</div>
        </div>
    );
}

export default ResultCard;
