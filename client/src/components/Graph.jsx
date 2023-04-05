import React from 'react'
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from "react-chartjs-2"
import Lable from './Lable';

Chart.register(ArcElement)
const Graph = () => {
    

    const config = {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
                borderRadius:30,
                spacing:10
              }]
        },
        options:{
            cutout:110
        }
      };

  return (
     <div className="flex justify-content max-w-xs mx-auto">
        <div className="item">
            <div className="chart relative">
            <Doughnut {...config}></Doughnut>
                <h3 className='mb-4 font-bold title'>Total
                    <span className='block text-3xl text-green-800'> <span>&#8377; {0}</span></span>
                </h3>
            </div>   
        
            <div className="flex flex-col py-10 gap-4">
                {/* Labels */}
                <Lable/>
            </div> 

        </div>
    </div>

  )
}

export default Graph
