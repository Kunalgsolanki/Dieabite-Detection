import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    userData: {
        id: 1,
        data: {
            Gender: "",
            Pregnancies: 0,
            Glucose: 0,
            BloodPressure: 0,
            SkinThickness: 1.55,
            Insulin: 0,
            BMI: 0,
            DiabetesPedigreeFunction: 0,
            Age: 0,

        }
    }
}

const userSlice = createSlice({

    name: "patientData",
    initialState,
    reducers: {
        // data upadate to from 

        setUserData: (state, actions) => {
            const updateData = {
                id: nanoid(),
                data: actions.payload
            }
            state.userData = { ...state.userData, ...updateData }


        }

    },



})


export const { setUserData } = userSlice.actions
export default userSlice.reducer