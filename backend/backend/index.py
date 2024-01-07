from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
import numpy as np
import pickle
import os

app = FastAPI()

# Loading the saved model
model_path = './diabetes_model.sav'
if os.path.exists(model_path):
    loaded_model = pickle.load(open(model_path, 'rb'))
else:
    raise FileNotFoundError(f"Model file '{model_path}' not found.")

# Creating the function for prediction
def diabetes_prediction(input_data: Dict):
    input_data_list = [
    
        input_data["Pregnancies"],
        input_data["Glucose"],
        input_data["BloodPressure"],
        input_data["SkinThickness"],
        input_data["Insulin"],
        input_data["BMI"],
        input_data["DiabetesPedigreeFunction"],
        input_data["Age"],
    ]
    input_data_as_array = np.asarray(input_data_list)
    input_data_reshaped = input_data_as_array.reshape(1, -1)
    prediction = loaded_model.predict(input_data_reshaped)
    if prediction[0] == 0:
        return 'Person is not diabetic'
    else:
        return 'Person has diabetes'

@app.post("/diabetes-prediction")
async def predict_diabetes(request: Dict):
    try:
        result = diabetes_prediction(request)
        return {'result': result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Configure CORS
origins = [
    "http://localhost:5173",  # Add your frontend origin here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
