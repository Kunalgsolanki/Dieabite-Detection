// eslint-disable-next-line no-unused-vars
import React from "react";
import { Chart } from "react-google-charts";
import {useSelector} from "react-redux"

export default function LineChart() {

    const user = useSelector((state) => state.userData.data);
    // eslint-disable-next-line no-unused-vars
    const bmiValue = user.data.BMI || 0;
    const Glucose = user.data.Glucose ||0;
    


    try {
        
        const data = [
            ["Glucose (mg/dL)", "BMI"],
            [70, 18.5],
            [parseFloat(Glucose), parseFloat(bmiValue)],
            [170,  27],
          ];
        
          const options = {
            title: "Glucose BMI Relationship",
            hAxis: { title: "Glucose (mg/dL)" },
            vAxis: { title: "BMI" },
            series: {
              0: { color: "blue", pointSize: 8, lineDashStyle: [4, 4] },
              1: { color: "red", pointSize: 8, lineDashStyle: [4, 4] },
              2: { color: "green", pointSize: 8, lineDashStyle: [4, 4] },
            },
          };
        
          return (
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          );
     } catch (error) {

        console.log(error)
        
     }

 
  
}
