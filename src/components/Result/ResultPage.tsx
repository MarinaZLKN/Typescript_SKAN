import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/ResultPage.scss';
import StatisticComponent from "./StatisticComponent";


const ResultPage: React.FC = () => {
    const location = useLocation();
    const responseData = location.state?.responseData;

    console.log('Passed data to resultPage: ', responseData);


    return(
        <>
            <div className="result-content">
                <div className="result-static">
                    <div className="result-static_left">
                        <h1 className="result-static_main-title">We are searching. Results coming soon</h1>
                        <span className="result-static_span">The search may take some time, please be patient.</span>
                    </div>
                    <div className="result-static_pic">
                        <div className="result-pic">
                            <img src="/girl-pic.png" />
                        </div>
                    </div>
                </div>
            </div>
            <StatisticComponent data={responseData} />
        </>
    )
}

export default ResultPage;