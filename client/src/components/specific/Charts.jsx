import React from 'react'
import {Line,Doughnut} from "react-chartjs-2"
import {
        CategoryScale, 
        Chart as ChartJS,
        Tooltip,
        Filler,
        LinearScale,
        PointElement,
        LineElement,
        ArcElement,
        Legend,
        plugins,
        scales,
    } from 'chart.js'
import { purpleLight , purple,orange, orangeLight} from '../../constants/color';
import { getLast7Days } from '../../lib/features';

const labels = getLast7Days();


ChartJS.register(
    CategoryScale,
    Tooltip,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend
);

const lineChartOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },
    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            beginAtZero:true,
            grid:{
                display:false,
            },
        },
    }    
};


const LineChart = ({value=[]}) => {

  const data = {
    labels,
    datasets:[
        {
            data : value,
            label:"Revenue",
            fill:true,
            backgroundColor:purpleLight,
            borderColor:purple,
        },
    ],
  };

  return <Line data={data}/>
};


const doughnutChartOptions = {
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
    },
    cutout:120,
};


const DoughnutChart = ({value=[],labels=[]}) => {

    const data = {
        labels,
        datasets:[
            {
                data : value,
                // label:"Total Chats vs Group Chats",
                backgroundColor:[purpleLight,orangeLight],
                hoverBackgroundColor:[purple,orange],
                borderColor:[purple,orange],
                offset:40,
            },
        ],
    };
    

    return (
        <Doughnut 
            style={{zIndex:10}} 
            data={data} 
            options={doughnutChartOptions}
        />
    );
  };

export {LineChart,DoughnutChart}
