import { Card, Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function TableWithStripedColumns() {

  const route = useNavigate()
  try {
    const user = useSelector((state) => state.userData.data);
    const bmiValue = user.data.BMI || 0;
    const Glucose = user.data.Glucose ||0;
    const bloodPressure = user.data.BloodPressure || 0
    


    const TABLE_HEAD = ["Test Name", "Range Data ", "UserData"];

    const TABLE_ROWS = [
      {
        name: "BMI (Body Mass Index)",
        range: "18.5 - 24.5",
        userValue: bmiValue, // Use bmiValue directly
        advice: "Normal",
      },
      {
        name: "Glucose Levels (Fasting Blood Glucose)",
        range: "70 - 99 mg/dl",
        userValue: Glucose,
        advice: "Normal",
      },
      {
        name: "Blood Pressure (Systolic/Diastolic)",
        range: "90/60 mmHg - 120/80 mmHg",
        userValue: bloodPressure,
        advice: "Normal",
      },
      
    ];

    return (
      <React.Fragment>
        <Card className="border-[#055c32] border-x-1 border-y-1 mt-5  border-b-[1px]  shadow-2xl p-4 sm:p-6 lg:w-[800px] xl:w-[800px] sm:w-full mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, range, userValue }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {range}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {userValue}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </React.Fragment>
    );
  } catch (error) {
    
    
      
    console.error("Error fetching BMI data:", error);
     alert("back", route("/"))
    return null;
     // or render an error message
  }
}
