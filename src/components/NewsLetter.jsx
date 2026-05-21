import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center max-w-5xl lg:w-full mx-2 lg:mx-auto my-24 px-4 py-12 md:py-16 rounded-2xl bg-gray-900 text-white'>
      <Title
        title='Stay Inspired'
        subTitle='Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.'
      />

      <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full'>
        <input
          type='text'
          placeholder='Enter your email'
          className='w-full md:max-w-md px-4 py-2.5 bg-white/10 border border-white/20 rounded outline-none'
        />

        <button className='group flex items-center justify-center gap-2 px-4 md:px-7 py-2.5 bg-black rounded transition-all active:scale-95'>
          Subscribe

          <img
            src={assets.arrowIcon}
            alt='arrow-icon'
            className='w-3.5 invert group-hover:translate-x-1 transition-all'
          />
        </button>
      </div>

      <p className='mt-6 text-xs text-center text-gray-500'>
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  )
}

export default NewsLetter