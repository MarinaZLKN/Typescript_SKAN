import React from 'react';
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
          <div>
            <div className="stat-component_title">Summary</div>
            <div className="stat-component_total-amount">No data available</div>
          </div>);
    }

    return (
        <div>
            <div className="stat-component_title">Summary</div>
            <div className="stat-component_total-amount"> {data.data[0].data.length} options found</div>

        </div>
    )
}

export default StatisticComponent;