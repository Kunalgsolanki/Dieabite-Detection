import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import TableWithStripedColumns from './Table'
// eslint-disable-next-line no-unused-vars
import DiabetesChart from './chart/Piechart'
import BarChart from './chart/BarChart'

import Linechart from './chart/Linechart'
import {useSelector} from "react-redux"



const Result = () => {
  const UserData  = useSelector(state=>state.userData)

   console.log(UserData)

  return (
  <React.Fragment>
     <div>
       <div className='flex flex-col'>
         {/*  title code here  */}
       <div  className='flex justify-center align-middle'  color='gray'> 
            <Typography variant='h2'  color='gray'>
            Diabetes  Report

            </Typography>
        </div>

        <div>
         {/*  table code here  */}
         <TableWithStripedColumns/>

         <div className='flex mt-10 lg:flex-row lg:justify-between  flex-col'>
           {/* <div> <DiabetesChart/> </div> */}
           <Card >  <div> <Linechart/></div></Card>
         <Card>   <div> <BarChart/>  </div></Card>

         </div>

         

        </div>
       </div>
        
     </div>
  </React.Fragment>
  )
}

export default Result
