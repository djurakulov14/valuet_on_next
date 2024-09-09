import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              position: "bottom",
              
            }
            
          }
        }}
      />
    </div>
  );
}
export default PieChart;