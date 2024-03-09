import React from 'react'
import Maps from "./Maps"
import { FormInput } from './FormInput'
export const Contact:React.FC = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
                <div className='contact__info'>
                <FormInput/>
                    </div>
                    <div className='map'>
                     <Maps/>
                    </div>
                </div>
        </div>

    </div>
  )
}
