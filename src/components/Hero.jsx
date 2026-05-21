import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const cities = [
    'Dubai',
    'London',
    'Paris',
    'New York',
    'Istanbul',
    'Tokyo'
  ]

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-screen'>
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>
        The Ultimate Hotel Experience
      </p>

      <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] `md:leading-14` font-bold md:font-extrabold max-w-xl mt-4'>
        Discover Your Perfect Gateway Destination
      </h1>

      <p className='max-w-xl mt-2 text-sm md:text-base'>
        Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
      </p>

      <form className='flex flex-col md:flex-row gap-4 md:items-end bg-white text-gray-500 rounded-xl px-6 py-5 mt-8 shadow-lg max-md:w-full'>
        <div>
          <div className='flex items-center gap-2'>
            <img
              src={assets.calenderIcon}
              alt=''
              className='h-4'
            />

            <label htmlFor='destinationInput'>
              Destination
            </label>
          </div>

          <input
            list='destinations'
            id='destinationInput'
            type='text'
            placeholder='Type here'
            required
            className='mt-1.5 px-3 py-1.5 text-sm rounded border border-gray-200 outline-none'
          />

          <datalist id='destinations'>
            {cities.map((city, index) => (
              <option
                key={index}
                value={city}
              />
            ))}
          </datalist>
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img
              src={assets.calenderIcon}
              alt=''
              className='h-4'
            />

            <label htmlFor='checkIn'>
              Check In
            </label>
          </div>

          <input
            id='checkIn'
            type='date'
            className='mt-1.5 px-3 py-1.5 text-sm rounded border border-gray-200 outline-none'
          />
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img
              src={assets.calenderIcon}
              alt=''
              className='h-4'
            />

            <label htmlFor='checkOut'>
              Check Out
            </label>
          </div>

          <input
            id='checkOut'
            type='date'
            className='mt-1.5 px-3 py-1.5 text-sm rounded border border-gray-200 outline-none'
          />
        </div>

        <div className='flex md:flex-col gap-2 max-md:items-center'>
          <label htmlFor='guests'>
            Guests
          </label>

          <input
            id='guests'
            type='number'
            min={1}
            max={4}
            placeholder='1'
            className='w-16 px-3 py-1.5 text-sm rounded border border-gray-200 outline-none'
          />
        </div>

        <button className='flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-md cursor-pointer max-md:w-full'>
          <img
            src={assets.searchIcon}
            alt='search'
            className='h-5'
          />

          <span>
            Search
          </span>
        </button>
      </form>
    </div>
  )
}

export default Hero