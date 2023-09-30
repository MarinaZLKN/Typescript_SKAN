import React from 'react';
import '../../styles/ResultPage.scss';
import DataSlider from "./DataSlider";
import { DataElement } from './DataSlider'

interface DataItem {
    data: any[]; //TODO replace 'any' with a more specific type !!!!!!!!!!!!!!
}


interface StatisticComponentProps {
    data?: {
        data?: DataItem[];
    };
}

const StatisticComponent: React.FC<StatisticComponentProps> = ({ data }) => {

    console.log('StatisticComponent data: ', data)
     if (!data || !data.data || data.data.length === 0) {
        return (
          <div className="stat-component">
            <div className="result-static_main-title">Summary</div>
            <div className="result-static_span">No data available</div>
          </div>);
    }

    return (
        <div className="stat-component">
            <div className="result-static_main-title">Summary</div>
            <div className="result-static_span"> {data.data[0].data.length} options found</div>
            {/*<DataSlider data={data} />*/}
        </div>
    )
}

export default StatisticComponent;