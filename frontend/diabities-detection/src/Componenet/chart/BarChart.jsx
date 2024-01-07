// eslint-disable-next-line no-unused-vars
import React from "react";
import { Chart } from "react-google-charts";
import { useSelector} from "react-redux"

 

  export default function BarChart() {
   

    try {
      const user = useSelector((state) => state.userData.data);
      const bmiValue = user.data.BMI || 0;
      const Glucose = user.data.Glucose ||0;
      const bloodPressure = user.data.BloodPressure || 0
  
  
  
      console.log(bmiValue)

      const data = [
        ["Tets", "Default Value", "User Data" ],
        ["BMI (Body Mass Index) " , parseFloat( 24.5), parseFloat(bmiValue)],
        ["Glucose Levels (Fasting Blood Glucose)",  99, parseFloat(Glucose)],
        ["Blood Pressure (Systolic/Diastolic)", 120, parseFloat(bloodPressure)],
       
      
      ]
      
       const options = {
      
          title: "Diabites Detection Data ",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Test Data ",
            minValue: 0,
          },
          vAxis: {
            title: "Test Name ",
          },
        };
      
      return (
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      );
    } catch (error) {
       alert("back ")
      console.log(error)
      
    }
   
   
  }