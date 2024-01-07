import React from 'react'
import {
    Navbar,

} from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
const Header = ({children}) => {
    return (
        <React.Fragment>
            <div 
             
             
            >

                <Navbar fullWidth={true}   className=' sticky bg-[#000000]  top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  p-2 lg:rounded-full lg:pl-6 lg:mt-2
                 border-x-gray-950 shadow-lg   
                ' blurred={true}

                >

<div className="flex items-center justify-center text-blue-gray-900">

      <div className='text-2xl  font-semibold text-[#ffffff]'> 

      Diabetes Detection system
      </div>

    </div>
                </Navbar>
                {/* <Form/> */}
                { children}
            </div>
        </React.Fragment>
    )
}

export default Header
