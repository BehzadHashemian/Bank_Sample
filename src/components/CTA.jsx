import React from 'react'
import styles from '../style'
import Button from './Button'


const CTA = () => {
  return (
    <section className='flex flex-1 justify-center my-20'>
      <div className='flex md:flex-row flex-col justify-around items-center bg-black-gradient-2 z[20] rounded-2xl md:w-[1170px] md:h-[293] py-10 my-10'>
        <div className='mb-4 px-10'>
        <h1 className={`${styles.heading2} md:py-4 `}>Let’s try our service now!</h1>
        <p className={`${styles.paragraph} py-4  md:w-[500px] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      <Button />
      </div>
    </section>
  )
}

export default CTA