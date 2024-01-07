import { Button, Card, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { setUserData } from "../Feature/UserData/UserSilce";


const Form = () => {
  const [formData, setFormData] = useState({
    Gender: "",
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 20.536, // defoult value 
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0.471,
    Age: 0
  });
  const [Data, setData] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [know, setKnow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch()
  const route = useNavigate()

  console.log(formData);

  const labelStyle = {
    color: 'white',
    marginBottom: '2px',
    cursor: 'pointer',
    position: 'relative',
  };

  const inputStyle = {
    borderColor: 'gray',
    padding: '5px',
    marginBottom: '10px',
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    display: 'none',
    fontSize: '16px',
    zIndex: 1,


  };

  const handleLabelHover = (labelId) => {
    const tooltip = document.getElementById(`${labelId}-tooltip`);
    if (tooltip) {
      tooltip.style.display = 'block';
    }




  };



  const handleLabelLeave = (labelId) => {
    const tooltip = document.getElementById(`${labelId}-tooltip`);
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'Gender' && value === 'Female') {
      setData(true);
    } else if (name === 'Pregnancies' || formData.Gender === 'Female') {

      setData(true);
    } else {
      setData(false);
    }

  };

  console.log(formData.Gender, "Gender")
  console.log("data", Data)
  console.log("know", know)
  /*   handle submit method which is use to  submit data to the store by
     using  dispetch method 
   */
  const handleclick = () => {

    dispatch(setUserData({ data: formData }))
    route("/Result")
  }




  //  fetch api 

  // const handleclick = async () => {
  //   try {
  //     // Make sure to replace 'http://127.0.0.1:8000/diabetes-prediction' with your actual API endpoint
  //     const apiUrl = 'http://127.0.0.1:8000/diabetes-prediction';

  //     // Making a POST request to the API with the collected form data
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ data: formData }), // Sending form data as JSON
  //     });

  //     // Check if the request was successful (status code 200-299)
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log('API Response:', result);

  //       // Dispatch the result to Redux or handle it as needed
  //       // Example: dispatch(setResult(result));

  //       // Navigate to the result page
  //       route("/Result");
  //     } else {
  //       console.error('API Error:', response.status, response.statusText);
  //       // Handle error scenarios here
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle unexpected errors here
  //   }
  // };

  return (
    <React.Fragment>
      <div className='flex flex-col text-xl '  >
        <Card
          shadow={true}
          variant='gradient'
          className='border-gray-700 p-10 lg:w-[600px] xl:w-[600px]'
          style={{ background: 'linear-gradient(to bottom, black, blue)' }}
        >
          {/* Gender  */}
          <div
            className='flex flex-col'
            style={labelStyle}

          >
            <div className='flex flex-row justify-between'>
              <div>
                <label htmlFor='Gender'>Gender</label>
              </div>
              <div
                onMouseEnter={() => handleLabelHover('Gender')}
                onMouseLeave={() => handleLabelLeave('Gender')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>


              </div>

            </div>
            <div className='flex flex-row justify-around'>
              <div className='flex flex-row gap-3'>
                < input type='radio' id='Male' name='Gender' value='Male' onClick={(e) => handleInputChange(e)} color='blue' placeholder='2' />
                <div> Male </div>
              </div>
              <div className='flex flex-row gap-3'>
                < input type='radio' id='Female' value='Female' name='Gender' onClick={(e) => handleInputChange(e)} color='blue' placeholder='2' />
                <div> Female </div>
              </div>
            </div>
            <div id='Gender-tooltip' style={tooltipStyle}>
              Gender: (Male and female) Characteristics of diabetes differ between the two genders and is crucial for monitoring and detection.


            </div>
          </div>
          {/*  Pregnancies   */}

          <div className='flex flex-col gap-6 text-white'>
            {Data ? (<div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='Pregnancies'>Pregnancies</label>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('Pregnancies')}
                  onMouseLeave={() => handleLabelLeave('Pregnancies')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>


                </div>

              </div>
              <Input id='Pregnancies' name='Pregnancies' onChange={(e) => handleInputChange(e)} variant='static' color='blue' placeholder='2' style={inputStyle} />
              <div id='Pregnancies-tooltip' style={tooltipStyle}>
                Number of pregnancies the person has experienced.
                The biological process is been linked with high hormonal and metabolic changes. Also, Gestational diabetes may affect blood glucose levels during pregnancy
              </div>
            </div>) : null}

            {/*  Glucose */}
            <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='Glucose'>Glucose</label>

                </div>
                <div className='cursor-pointer'
                  onMouseEnter={() => handleLabelHover('Glucose')}
                  onMouseLeave={() => handleLabelLeave('Glucose')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <Input id='Glucose' variant='static' name='Glucose' onChange={(e) => handleInputChange(e)} color='blue' placeholder='90' style={inputStyle} />
              <div id='Glucose-tooltip' style={tooltipStyle}>
                Blood Glucose Levels: (millimoles per liter - mmol/ L)
                The concentration of sugar in the blood, crucial for energy production and is regulated by insulin.
                Abnormal levels may indicate diabetes.
              </div>
            </div>
            {/*  BloodPressure */}
            <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='bloodPressure'>Blood Pressure</label>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('bloodPressure')}
                  onMouseLeave={() => handleLabelLeave('bloodPressure')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <Input size='200' id='BloodPressure' variant='static' name='BloodPressure' onChange={(e) => handleInputChange(e)} color='blue' placeholder='120/80' style={inputStyle} />
              <div id='bloodPressure-tooltip' style={tooltipStyle}>
                Blood Pressure: (systolic/diastolic pressure - mmHg)
                Force of blood against arterial walls.
                It is vital for circulation. Hypertension is linked to a number of diabetic complications.
              </div>
            </div>


            {/*  SkinThickness */}
            {/* <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div className='justify-around flex-row'>
                  <div>
                    <label htmlFor='SkinThickness'>SkinThickness</label>
                  </div>
                  <div className='flex flex-row gap-6 '>
                    <Switch onClick={() => setKnow(!know)} color='black' style={{ color: "white", fontWeight: "bold" }} />
                    <div> Have Person know SkinThickness? </div>


                  </div>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('SkinThickness')}
                  onMouseLeave={() => handleLabelLeave('SkinThickness')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <Input disabled={know ? false : true} id='SkinThickness' variant='static' name='SkinThickness' onChange={(e) => handleInputChange(e)} color='blue' placeholder='1.55-1.61' style={inputStyle} />
              <div id='SkinThickness-tooltip' style={tooltipStyle}>
                Skin thickness is not a direct indicator of diabetes. If you suspect diabetes, it's best to consult a healthcare professional for proper evaluation
              </div>
            </div> */}


            {/* Insulin */}


            {/* BMI */}

            <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='BMI'>BMI</label>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('BMI')}
                  onMouseLeave={() => handleLabelLeave('BMI')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <Input id='BMI' variant='static' color='blue' name='BMI' onChange={(e) => handleInputChange(e)} placeholder='33.6' style={inputStyle} />
              <div id='BMI-tooltip' style={tooltipStyle}>
                BMI (Body Mass Index): ((Weight in kg) / (height in m)^2)
                A measure of body fat based on weight and height. It is often used to assess health and potential risks.
                High BMI is associated with increased diabetes risk.
              </div>
            </div>

            {/* DiabetesPedigreeFunction */}

            {/* <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div>
                  <label htmlFor='DiabetesPedigreeFunction'>DiabetesPedigreeFunction</label>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('DiabetesPedigreeFunction')}
                  onMouseLeave={() => handleLabelLeave('DiabetesPedigreeFunction')}
                >

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                </div>
              </div>
              <Input id='DiabetesPedigreeFunction' name='DiabetesPedigreeFunction' onChange={(e) => handleInputChange(e)} variant='static' color='blue' placeholder='0.08 to 2.42' style={inputStyle} />
              <div id='DiabetesPedigreeFunction-tooltip' style={tooltipStyle}>
                DiabetesPedigreeFunction (DPF) is a score that gauges the genetic predisposition to diabetes based on family history. A higher score indicates a greater likelihood of genetic influence.







              </div>
            </div> */}

            {/* Age */}


            <div
              className='flex flex-col'
              style={labelStyle}

            >
              <div className='flex flex-row justify-between'>
                <div
                >
                  <label htmlFor='Age'>Age</label>
                </div>
                <div
                  onMouseEnter={() => handleLabelHover('Age')}
                  onMouseLeave={() => handleLabelLeave('Age')}

                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                </div>
              </div>
              <Input id='Age' variant='static' name='Age' onChange={(e) => handleInputChange(e)} color='blue' placeholder='33' style={inputStyle} />
              <div id='Age-tooltip' style={tooltipStyle}>
                Age: (Number of years)
                Risk of diabetes increases with age due to lifestyle and metabolic changes.
              </div>
            </div>



          </div>
        </Card>

        <div className='flex justify-center mt-10'>
          <Button color='black' onClick={handleclick}>Submit Data</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Form;
