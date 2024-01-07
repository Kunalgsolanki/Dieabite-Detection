import React from 'react'
import { Chart } from "react-google-charts";


const Piechart = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];

      const options = {
        title: "My Daily Activities",
      };
      
  return (
    <React.Fragment>
         <Chart
         
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </React.Fragment>
  )
}

export default Piechart