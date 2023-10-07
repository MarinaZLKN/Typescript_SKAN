import React from "react";
import {myDocument} from "../../../reducers/searchReducer";

interface ResultCardProps {
  data: myDocument[] | null;
}
const ResultCardList: React.FC<ResultCardProps> = ({ data }) => {
    return(
        <div></div>
    )
}
export default  ResultCardList;