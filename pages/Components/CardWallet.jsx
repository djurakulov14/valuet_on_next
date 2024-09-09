import React from 'react'
import { Line } from 'react-chartjs-2';
import { SiBitcoinsv } from "react-icons/si";



const CardWallet = ({item}) => {

    
    const data = {
        labels: [12,12,121,121,1,21,1,122,11],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: "Spendings",
                data: [1,4,6,1,7,2,7,9],
                // you can set indiviual colors for each bar
                borderWidth: 1,
                fill: true,
                borderColor: '#0097E8',
                tension: 0,
                legend: {
                    display: false
                },
                pointBackgroundColor: "transparent",
                backgroundColor: "transparent",
            }
        ]
  }

  return (
    <div className="top h-[200px] w-[350px] p-4 rounded-xl bg-[linear-gradient(237.07deg,rgba(96,67,146,0.5)_-8.06%,rgba(15,11,56,0.5)_96.63%)]">
        <div class=" rounded-lg flex items-start justify-between ">
            <h1 className=' uppercase'>{item.title}</h1>
            <div className="right flex gap-3">
                <div>
                    <p class="text-white text-3xl font-semibold">{item.balance} USD</p>
                    <p class="text-gray-500 text-lg mt-1">+2,59%</p>
                </div>
                <div class="bg-purple-300 rounded-full p-2">
                    <div class="bg-purple-600 rounded-full p-2">
                        <SiBitcoinsv size={35}/>
                    </div>
                </div>
            </div>
        </div>
        <Line
      className='h-[100px]'
      style={{height: "100px"}}
        data={data}
        options={{
            responsive: true,
            aspectRatio: 1.5,
          plugins: {
            legend: {
              position: "bottom",
              display: false
              
            },            
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false,

                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    drawTicks: false,
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        }
        }}
      />
    </div>
  )
}

export default CardWallet