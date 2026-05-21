import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  roomsDummyData,
  assets,
  facilityIcons
} from '../assets/assets'
import StarRating from '../components/StarRating'

const CheckBox = ({
  label,
  selected = false,
  onChange = () => {}
}) => {
  return (
    <label className='flex items-center gap-3 mt-2 text-sm cursor-pointer'>
      <input
        type='checkbox'
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />

      <span className='font-light select-none'>
        {label}
      </span>
    </label>
  )
}

const RadioButton = ({
  label,
  selected = false,
  onChange = () => {}
}) => {
  return (
    <label className='flex items-center gap-3 mt-2 text-sm cursor-pointer'>
      <input
        type='radio'
        name='sortOption'
        checked={selected}
        onChange={() => onChange(label)}
      />

      <span className='font-light select-none'>
        {label}
      </span>
    </label>
  )
}

const AllRooms = () => {
  const navigate = useNavigate()

  const [openFilters, setOpenFilters] = useState(false)

  const roomTypes = [
    'Single Bed',
    'Double Bed',
    'Luxury Room',
    'Family Suite'
  ]

  const priceRanges = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000'
  ]

  const sortOptions = [
    'Price Low to High',
    'Price High to Low',
    'Newest First'
  ]

  const handleRoomClick = (id) => {
    navigate(`/rooms/${id}`)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='max-w-7xl mx-auto px-4 md:px-12 pt-28 md:pt-32 pb-12'>
      <div className='mb-10'>
        <h1 className='font-playfair text-4xl md:text-5xl text-gray-900'>
          Hotel Rooms
        </h1>

        <p className='mt-3 max-w-2xl leading-relaxed text-gray-500'>
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row-reverse gap-10'>
        <div className='w-full lg:w-80 shrink-0'>
          <div className='bg-white border border-gray-300 rounded-xl overflow-hidden'>
            <div
              className={`flex items-center justify-between px-5 py-4 border-gray-300 ${
                openFilters ? 'border-b' : ''
              }`}
            >
              <p className='font-medium text-gray-800'>
                FILTERS
              </p>

              <div className='text-sm'>
                <span
                  className='lg:hidden cursor-pointer'
                  onClick={() => setOpenFilters(!openFilters)}
                >
                  {openFilters ? 'HIDE' : 'SHOW'}
                </span>

                <span className='hidden lg:block cursor-pointer'>
                  CLEAR
                </span>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openFilters
                  ? 'max-h-175'
                  : 'max-h-0 lg:max-h-175'
              }`}
            >
              <div className='px-5 pt-5'>
                <p className='pb-2 font-medium text-gray-800'>
                  Popular Filters
                </p>

                {roomTypes.map((room, index) => (
                  <CheckBox
                    key={index}
                    label={room}
                  />
                ))}
              </div>

              <div className='px-5 pt-6'>
                <p className='pb-2 font-medium text-gray-800'>
                  Price Range
                </p>

                {priceRanges.map((range, index) => (
                  <CheckBox
                    key={index}
                    label={`$ ${range}`}
                  />
                ))}
              </div>

              <div className='px-5 pt-6 pb-8'>
                <p className='pb-2 font-medium text-gray-800'>
                  Sort By
                </p>

                {sortOptions.map((option, index) => (
                  <RadioButton
                    key={index}
                    label={option}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <div className='flex flex-col'>
            {roomsDummyData?.map((room) => (
              <div
                key={room._id}
                className='flex flex-col md:flex-row gap-6 py-8 border-b border-gray-200'
              >
                <div className='w-full md:w-[45%]'>
                  <img
                    src={room.images?.[0]}
                    alt={room.hotel?.name}
                    onClick={() => handleRoomClick(room._id)}
                    className='w-full aspect-video object-cover rounded-2xl shadow-md cursor-pointer hover:scale-[1.02] transition'
                  />
                </div>

                <div className='flex-1 flex flex-col justify-between gap-3'>
                  <div className='flex flex-col gap-3'>
                    <p className='uppercase text-xs tracking-wider text-gray-400'>
                      {room.hotel?.city}
                    </p>

                    <h2
                      onClick={() => handleRoomClick(room._id)}
                      className='text-3xl font-playfair cursor-pointer hover:text-black'
                    >
                      {room.hotel?.name}
                    </h2>

                    <div className='flex items-center gap-2'>
                      <StarRating />

                      <span className='text-sm text-gray-600'>
                        200+ Reviews
                      </span>
                    </div>

                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                      <img
                        src={assets.locationIcon}
                        alt=''
                        className='w-4 h-4'
                      />

                      <span>
                        {room.hotel?.address}
                      </span>
                    </div>

                    <div className='flex flex-wrap gap-3 mt-2'>
                      {room.amenities?.map((item, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-2 px-3 py-2 rounded-lg border bg-[#F5F5FF]'
                        >
                          <img
                            src={facilityIcons[item]}
                            alt={item}
                            className='w-4 h-4'
                          />

                          <span className='text-xs font-medium text-gray-700'>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-4 md:mt-0'>
                    <span className='text-xl font-semibold text-gray-900'>
                      ${room.price || 399}
                    </span>

                    <span className='text-sm font-light text-gray-500'>
                      {' '} /night
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllRooms