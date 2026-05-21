import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70'>
      <form className='flex max-w-4xl w-full mx-4 overflow-hidden bg-white rounded-xl'>
        <img
          src={assets.regImage}
          alt='reg-image'
          className='hidden md:block w-1/2 object-cover'
        />

        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
          <img
            src={assets.closeIcon}
            alt='close-icon'
            className='absolute top-4 right-4 w-4 h-4 cursor-pointer'
          />

          <p className='mt-6 text-2xl font-semibold'>
            Register Your Hotel
          </p>

          <div className='w-full mt-4'>
            <label
              htmlFor='name'
              className='font-medium text-gray-500'
            >
              Hotel Name
            </label>

            <input
              id='name'
              type='text'
              placeholder='Type here'
              required
              className='w-full px-3 py-2.5 mt-1 border border-gray-200 rounded outline-indigo-500 font-light'
            />
          </div>

          <div className='w-full mt-4'>
            <label
              htmlFor='contact'
              className='font-medium text-gray-500'
            >
              Phone
            </label>

            <input
              id='contact'
              type='text'
              placeholder='Type here'
              required
              className='w-full px-3 py-2.5 mt-1 border border-gray-200 rounded outline-indigo-500 font-light'
            />
          </div>

          <div className='w-full mt-4'>
            <label
              htmlFor='address'
              className='font-medium text-gray-500'
            >
              Address
            </label>

            <input
              id='address'
              type='text'
              placeholder='Type here'
              required
              className='w-full px-3 py-2.5 mt-1 border border-gray-200 rounded outline-indigo-500 font-light'
            />
          </div>

          <div className='w-full mt-4'>
            <label
              htmlFor='city'
              className='font-medium text-gray-500'
            >
              City
            </label>

            <select
              id='city'
              required
              className='w-full px-3 py-2.5 mt-1 border border-gray-200 rounded outline-indigo-500 font-light'
            >
              <option value=''>
                Select City
              </option>

              {cities.map((city) => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='mr-auto mt-6 px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 transition-all rounded cursor-pointer'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelReg