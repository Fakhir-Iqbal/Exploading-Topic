import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ dataPoints, height, toolTip, yaxis }) => {
    const options = {
        animationEnabled: true,
        height: height,
        toolTip: {
            enabled: toolTip,
            contentFormatter: function (e) {
                // Get the date (year) and value from the first data point in the event
                const { x, y } = e.entries[0].dataPoint;
                const year = new Date(x).getFullYear();
                const monthName = x.toLocaleString('default', { month: 'short' });
                const formattedValue = y.toLocaleString(); // Format value with commas

                return `
                    <div style="
                        background-color: #D6E9FB;
                        padding: 10px;
                        font-size: 1.25rem; 
                    ">
                        <div style="color: black; font-weight: medium; text-align: center ">${monthName}</div>
                        <div style="color: blue; text-align: center; font-weight: bold;">${formattedValue}/mo</div>
                    </div>
                `;
            },
        },
        // title: {
        //           text: "Nuclear Electricity Generation in US"
        // },
        axisY: {
            // title: "Net Generation (in Billion kWh)",
            // suffix: " kWh",
            gridThickness: 1,
            lineColor: "transparent",
            tickColor: "transparent",
            gridColor: "#D3D3D3",
            labelFormatter: yaxis ? undefined : () => '',  // Hide Y-axis labels
            labelFontColor: "lightgray",

        },
        axisX: {
            labelFontColor: "lightgray",
            valueFormatString: "MMM YYYY",
            gridThickness: 0,
            interval: 10,
            intervalType: "month",
        },
        data: [{
            type: "area",
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0.## / mo",
            dataPoints: dataPoints,
            color: "#1565c0",
            fillOpacity: 0.1,
            markerType: "none",
            lineThickness: 2,
        }],
    };

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
};

export default Chart;

