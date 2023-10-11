import React from 'react';
import type { myDocument } from '../../../reducers/searchReducer'
import '../../../styles/ResultCard.css'


const parseXML = (xmlString: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, 'application/xml');
    return doc.documentElement.textContent || '';
    };

const limitTextLength = (text: string, limit = 400) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
};
interface ResultCardProps {
  data?: myDocument[] | null;
  title?: string;
  content: string;
  date: string;
  url: string;
  source: string;
  tag: string[];
  wordCount: number;

}
const ResultCard: React.FC<ResultCardProps> = ({ title , content, date, url, source, tag, wordCount}) => {
    const formatDate = (inputDate: string) => {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    const formattedDate = formatDate(date);


    const parsedContent = parseXML(content);
    const limitedContent = limitTextLength(parsedContent, 450);



    return (
        <div className="result-card">
            <div className="result-card_header">
                <label className="result-card_date">{formattedDate}</label>
                <label className="result-card_source">
                    <a href={url} id="res">{source}</a> </label>
            </div>
            <div className="result-card_title">{title ?? "No title found"}</div>
            <div className="result-card_news-type">{tag}</div>
            <div className="result-card_pic">img</div>
            <div className="result-card_text">{limitedContent}</div>
            <button className="result-card_btn">
                <a href={url}><label id="res-btn">Source link</label></a></button>
            <div className="result-words">{wordCount} words</div>
        </div>
    );
}

export default ResultCard;
