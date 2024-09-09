import React, { useEffect, useState } from 'react'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from './PieChart';
import { useHttp } from '../Hooks/http.hook';


const Balance = ({info}) => {

	
	
	let balances = info.map((data) => data.balance).reduce((accumulator, currentValue) => +accumulator + +currentValue, 0)
	
    
    const data = {
      labels: info.map((data) => data.title),
      // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
      datasets: [
          {
            label: `Balance -` ,
            data: info.map((data) => data.balance),
            // you can set indiviual colors for each bar
            backgroundColor: [
              '#FAD679',
              '#F5FBFE',
              '#018FFF',
            ],
            borderWidth: 0,
          }
      ]
}


  return (

	<div className="w-[253px] py-4 bg-gradient-to-b from-[rgba(27,18,78,0.2)] to-[#0F0B3890] rounded-lg flex flex-col justify-between">
		<h1 className=" text-xl ml-[24px] mb-3">Balance - {balances}$</h1>
		<PieChart chartData={data} />
	</div>
  )
}

export default Balance