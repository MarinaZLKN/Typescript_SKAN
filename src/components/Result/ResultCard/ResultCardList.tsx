import React from "react";
import {myDocument} from "../../../reducers/searchReducer";
import ResultCard from "./ResultCard";

interface ResultCardListProps {
    data: myDocument[] | null;


}


const ResultCardList: React.FC<ResultCardListProps> = ({ data }) => {
    console.log('result list: ', data)
    return(
         <div className="result-card-list-wrapper">
          {data?.map((card) => (
            <ResultCard
                 key={card.ok.id}
                 title={card.ok.title.text}
                 content={card.ok.content.markup}
                 date={card.ok.issueDate}
                 url={card.ok.url}
                 source={card.ok.source.name}
            />
          )) ?? null
          }
        </div>
    )
}
export default  ResultCardList;