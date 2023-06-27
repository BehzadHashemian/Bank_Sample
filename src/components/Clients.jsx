import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col justify-around items-center mx-10 px-10 my-10'>
        {clients.map((cli,index) => (
          <img src={cli.logo} alt="logo" key={cli.id} className='w-[192px] py-8'/>
        ))}
      </div>
    </section>
  )
}

export default Clients