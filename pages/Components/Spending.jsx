import React from 'react'
import { Line } from 'react-chartjs-2'

const Spending = ({info}) => {
    
    let spendings = info.map(item => item.transactions).flat().filter(tr => tr.type === "SEND").map(tt => tt.amount).reduce((accumulator, currentValue) => +accumulator + +currentValue, 0)

    const data = {
        labels: info.map(item => item.transactions).flat().filter(tr => tr.type === "SEND").map(data => data.date),
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: "Spendings",
                data: info.map(item => item.transactions).flat().filter(tr => tr.type === "SEND").map(tt => tt.amount),
                // you can set indiviual colors for each bar
                borderWidth: 1,
                fill: true,
                borderColor: '#0097E8',
                tension: 0.8,
                legend: {
                    display: false
                },
                pointBackgroundColor: "#0097E8",
                backgroundColor: "#0097E840",
            }
        ]
  }

  return (
    <div className="w-[253px] py-4 bg-gradient-to-b from-[rgba(27,18,78,0.2)] to-[#0F0B3890] rounded-lg">
		<h1 className=" text-xl ml-[24px] mb-3">Spending</h1>
		<h1 className=" text-xl ml-[24px] mb-3"> $ {spendings}</h1>
        <div className="chart-container p-3 h-[80%] flex flex-col justify-end">
      <Line
      className=' h-full'
        data={data}
        options={{
            aspectRatio: 1.9,
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
    </div>
  )
}

export default Spending