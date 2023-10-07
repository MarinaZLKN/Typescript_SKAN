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
                 title={card.ok.title}
            />
          )) ?? null
          }
        </div>
    )
}
export default  ResultCardList;