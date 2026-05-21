import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  assets,
  roomsDummyData,
  roomCommonData
} from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  const { id } = useParams()

  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  const facilityIcons = {
    'Free WiFi': assets.wifiIcon,
    Breakfast: assets.breakfastIcon,
    Parking: assets.parkingIcon,
    Pool: assets.poolIcon,
    'Room Service': assets.roomServiceIcon
  }

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(
      (room) => room._id === id
    )

    if (selectedRoom) {
      setRoom(selectedRoom)

      if (selectedRoom.images?.length > 0) {
        setMainImage(selectedRoom.images[0])
      }
    }
  }, [id])

  if (!room) {
    return (
      <div className='py-28 text-center'>
        Loading...
      </div>
    )
  }

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 py-28'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel?.name}

          <span className='ml-2 text-sm'>
            ({room.roomType})
          </span>
        </h1>

        <span className='px-3 py-1 text-xs text-white bg-orange-500 rounded-full'>
          20% OFF
        </span>
      </div>

      <div className='flex items-center gap-2 mt-3'>
        <StarRating />

        <p>
          200+ reviews
        </p>
      </div>

      <div className='flex items-center gap-2 mt-2 text-gray-500'>
        <img
          src={assets.locationIcon}
          alt='location'
          className='w-4 h-4'
        />

        <span>
          {room.hotel?.address}
        </span>
      </div>

      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        <div className='lg:w-1/2'>
          <img
            src={mainImage}
            alt='room'
            className='w-full rounded-xl shadow-lg'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 lg:w-1/2'>
          {room.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`room-${index}`}
              onClick={() => setMainImage(image)}
              className={`rounded-xl cursor-pointer shadow-md ${
                mainImage === image ? 'outline outline-orange-500' : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-8 mt-10'>
        <div>
          <h2 className='text-3xl font-playfair'>
            Experience Luxury Like Never Before
          </h2>

          <div className='flex flex-wrap gap-4 mt-4'>
            {room.amenities?.map((item, index) => (
              <div
                key={index}
                className='flex gap-2 px-3 py-2 bg-gray-100 rounded-lg'
              >
                {facilityIcons[item] && (
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className='w-5 h-5'
                  />
                )}

                <span className='text-sm'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className='text-2xl font-semibold'>
          ${room.pricePerNight}/night
        </p>
      </div>

      <form className='flex flex-col md:flex-row justify-between gap-6 p-6 mt-16 bg-white rounded-xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div>
            <label className='font-medium'>
              Check-In
            </label>

            <input
              type='date'
              className='px-3 py-2 mt-2 border rounded'
            />
          </div>

          <div>
            <label className='font-medium'>
              Check-Out
            </label>

            <input
              type='date'
              className='px-3 py-2 mt-2 border rounded'
            />
          </div>

          <div>
            <label className='font-medium'>
              Guests
            </label>

            <input
              type='number'
              min='1'
              placeholder='1'
              className='max-w-20 px-3 py-2 mt-2 border rounded'
            />
          </div>
        </div>

        <button
          type='submit'
          className='px-10 py-4 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 md:px-20 active:scale-95'
        >
          Check Availability
        </button>
      </form>

      <div className='mt-20 space-y-5'>
        {roomCommonData.map((spec, index) => (
          <div
            key={index}
            className='flex gap-3'
          >
            <img
              src={spec.icon}
              alt={spec.title}
              className='w-6'
            />

            <div>
              <p className='font-medium'>
                {spec.title}
              </p>

              <p className='text-gray-500'>
                {spec.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='max-w-3xl py-10 my-16 text-gray-500 border-y'>
        <p>
          Guests will be allocated on the ground floor according to availability.
          You get a comfortable two bedroom apartment with a true city feeling.
        </p>
      </div>

      <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'>
          <img
            src={room.hotel.owner.image}
            alt='host'
            className='w-16 h-16 rounded-full'
          />

          <div>
            <p className='text-xl'>
              Hosted by {room.hotel?.name}
            </p>

            <div className='flex items-center mt-1'>
              <StarRating />

              <p className='ml-2'>
                200+ reviews
              </p>
            </div>
          </div>
        </div>

        <button className='w-fit px-10 py-4 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 active:scale-95 cursor-pointer'>
          Contact Now
        </button>
      </div>
    </div>
  )
}

export default RoomDetails