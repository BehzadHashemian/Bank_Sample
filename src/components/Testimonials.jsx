import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import { quotes } from '../assets'
const Testimonials = () => {
  return (
    <section >
      <div className='flex flex-col py-10 relative'>
        <div className='flex md:flex-row flex-col flex-1 justify-around items-center'>
          <h1 className={`${styles.heading2} md:w-[470px]  my-10`}>What people are saying about us</h1>
          <p className={`${styles.paragraph} md:w-[450px] md:mr-16 my-10`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex md:flex-row flex-col justify-center relative'>
          {feedback.map((feed,index) =>(
            <div className='flex flex-col justify-between mx-4 md:w-[30%] p-10 feature-card rounded-3xl z[1]' key={index}>
              <img src={quotes} alt="quots" className='w-[42px] mb-10' />
              <div className='h-[50%] mb-4'>
                <p className={`${styles.paragraph} `}>{feed.content}</p>
              </div>
              <div className='flex flex-row mt-4 '>
                <img src={feed.img} alt="profile" className='w-[48] h-[48px]'/>
                <div className='flex flex-col'>
                  <span className='text-white font-poppins text-[20px] pl-6'>{feed.name}</span>
                  <span className={`pl-6 ${styles.paragraph}`}>{feed.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-slate-500 absolute -right-[4%] w-[15%] -top-40 h-[120%] z-[5] rounded-full blue__gradient'></div>
      </div>
    </section>
  )
}

export default Testimonials