import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks , socialMedia } from '../constants'
const Footer = () => {
  return (
    <footer className='flex flex-col my-10 justify-between items-center'>
      <div className='flex md:flex-row justify-around flex-col md:w-[100%]'>
        <div className='flex flex-col justify-around items-center md:w-[40%] mb-10'>
          <img src={logo} alt="logo" className='md:w-[40%] mb-4'/>
          <p className={`${styles.paragraph} w-[50%] text-[14px] md:ml-16`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex flex-row text-white justify-around md:ml-10 md:w-[70%]'>
          {footerLinks.map((footerlink) => (
            <div className='flex flex-col md:mx-10'>
              <h4 className='md:text-[20px] text-[16px] mb-4'>{footerlink.title}</h4>
              <ul>
                {footerlink.links.map((link,index)=>(
                  <li className='my-1'><a href={link.link} className='font-poppins text-dimWhite md:text-[14px] text-[12px]'>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      <div className='flex md:flex-row flex-col my-10 flex-1 justify-between items-center border-t-[1px] w-[80%]'>
        <p className='font-poppins text-white flex my-4'>2021 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row '>
          {socialMedia.map((media,index) => (
            <a href={media.link} className='md:pl-8 px-4'><img src={media.icon} alt='media' /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer