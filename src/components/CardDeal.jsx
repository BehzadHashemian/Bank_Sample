import React from 'react'
import styles from '../style'
import Button from './Button'
import { card } from '../assets'
const CardDeal = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col my-10'>
        <div className='md:w-[50%] md:px-6 py-10 flex flex-col'>
          <h1 className={`${styles.heading2} py-4 px-6`}>Find a better card deal in few easy steps.</h1>
          <p className={`${styles.paragraph} py-4 pl-6 md:w-[500px]`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <div className='flex my-10 pl-6'>
              <Button />
            </div>       
        </div>
        <div className='md:w-[50%] md:ml-12'>
           <img src={card} alt="billing" className='md:w-[80%] z-[2] md:mt-8 md:ml-8'/>
        </div>
      </div>
    </section>
  )
}

export default CardDeal