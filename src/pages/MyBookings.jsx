import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData, assets } from '../assets/assets'

const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData)

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-28 md:pt-32 md:pb-35'>
      <Title
        title='My Bookings'
        subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks'
        align='left'
      />

      <div className='w-full max-w-6xl mt-8 text-gray-800'>
        <div className='hidden md:grid grid-cols-[3fr_2fr_1fr] py-3 border-b border-gray-300 font-medium text-base'>
          <p>Hotels</p>
          <p>Date & Timings</p>
          <p>Payment</p>
        </div>

        {bookings.map((booking, index) => (
          <div
            key={index}
            className='grid md:grid-cols-[3fr_2fr_1fr] gap-6 py-6 border-b border-gray-200'
          >
            <div className='flex flex-col md:flex-row'>
              <img
                src={booking.room.images[0]}
                alt='hotel'
                className='md:w-44 object-cover rounded shadow'
              />

              <div className='flex flex-col gap-2 md:ml-4 mt-3 md:mt-0'>
                <p className='font-playfair text-2xl'>
                  {booking.hotel.name}
                  <span className='ml-2 text-sm font-inter'>
                    ({booking.room.roomType})
                  </span>
                </p>

                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <img
                    src={assets.locationIcon}
                    alt='location'
                    className='w-4'
                  />
                  <span>{booking.hotel.address}</span>
                </div>

                <div className='flex items-center gap-2 text-sm text-gray-500'>
                  <img
                    src={assets.guestsIcon}
                    alt='guests'
                    className='w-4'
                  />
                  <span>Guests: {booking.guests}</span>
                </div>

                <p className='text-base font-medium'>
                  Total: ${booking.totalPrice}
                </p>
              </div>
            </div>

            <div className='flex flex-col justify-center gap-2 text-sm'>
              <p>
                Check In: {new Date(booking.checkInDate).toLocaleDateString()}
              </p>

              <p>
                Check Out: {new Date(booking.checkOutDate).toLocaleDateString()}
              </p>
            </div>

            <div className='flex flex-col items-start justify-center pt-3'>
              <div className='flex items-center gap-2'>
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <p
                  className={`text-sm ${
                    booking.isPaid ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {booking.isPaid ? 'Paid' : 'Unpaid'}
                </p>
              </div>

              {!booking.isPaid && (
                <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full cursor-pointer hover:bg-gray-50 transition-all'>
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings