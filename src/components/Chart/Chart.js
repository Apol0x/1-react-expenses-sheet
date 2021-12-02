import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';
const Chart = (props) => {
    const {dataPoints} = props;
    const dataPointsValues = dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {dataPoints.map((item)=>
                <ChartBar
                    key={item.label}
                    value={item.value}
                    maxValue={totalMaximum}
                    label={item.label}
                />
            )}
        </div>
    );
};

export default Chart;