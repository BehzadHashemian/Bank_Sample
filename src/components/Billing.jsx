import React from 'react'
import styles from '../style'
import { bill , google , apple } from '../assets'
const Billing = () => {
  return (
    <div className='flex md:flex-row flex-1 flex-col mt-10 items-center'>
      <div className='md:w-[50%] mx-6 relative flex z-[10]'>
        <img src={bill} alt="billing" className='md:w-[80%] z-[2]'/>
        <div className={`bg-slate-500 absolute top-[20%] -left-[40%] w-[70%] h-[60%] z-[1] rounded-full white__gradient`}></div>
        <div className={`bg-slate-500 absolute top-[20%] -left-[80%] w-[70%] h-[60%] z-[1] rounded-full pink__gradient`}></div>
      </div>
      <div className='md:w-[50%] sm:ml-6 mx-4 sm:px-10 py-10 flex flex-col '>
        <h1 className={`${styles.heading2} py-4 sm:px-6`}>Easily control your billing & invoicing.</h1>
        <p className={`${styles.paragraph} py-4 sm:px-6 md:w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex my-10 px-6 sm:justify-start justify-center'>
          <img src={apple} alt="apple" className='mr-6'/>
          <img src={google} alt="google" />
        </div>       
      </div>
    </div>
  )
}

export default Billing