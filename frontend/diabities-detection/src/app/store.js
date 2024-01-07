 import { configureStore} from "@reduxjs/toolkit"
 import  UserReducer from "../Feature/UserData/UserSilce"

 const store =  configureStore({
     reducer: UserReducer
 })


 export  default  store