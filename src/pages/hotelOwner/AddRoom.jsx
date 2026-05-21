import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: '',
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false
    }
  })

  return (
    <div>
      <form className='max-w-4xl'>
        <Title
          align='left'
          font='outfit'
          title='Add Room'
          subTitle='Fill in the details carefully and add accurate room details, pricing and amenities.'
        />

        <p className='mt-10 font-medium text-gray-800'>
          Images
        </p>

        <div className='flex flex-wrap gap-4 my-4'>
          {Object.keys(images).map((key) => (
            <label htmlFor={`roomImage${key}`} key={key}>
              <img
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=''
                className='object-cover w-16 h-16 border rounded cursor-pointer opacity-80'
              />

              <input
                hidden
                type='file'
                accept='image/*'
                id={`roomImage${key}`}
                onChange={(e) =>
                  setImages({
                    ...images,
                    [key]: e.target.files[0]
                  })
                }
              />
            </label>
          ))}
        </div>

        <div className='flex flex-wrap gap-6 mt-6'>
          <div className='flex flex-col flex-1 max-w-xs'>
            <p className='mb-1 text-gray-800'>
              Room Type
            </p>

            <select
              value={inputs.roomType}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  roomType: e.target.value
                })
              }
              className='p-2 border border-gray-300 rounded'
            >
              <option value=''>Select Room Type</option>
              <option value='Single Bed'>Single Bed</option>
              <option value='Double Bed'>Double Bed</option>
              <option value='Luxury Room'>Luxury Room</option>
              <option value='Family Suite'>Family Suite</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <p className='mb-1 text-gray-800'>
              Price <span className='text-xs'>/night</span>
            </p>

            <input
              type='number'
              placeholder='0'
              value={inputs.pricePerNight}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  pricePerNight: e.target.value
                })
              }
              className='w-32 p-2 border border-gray-300 rounded'
            />
          </div>
        </div>

        <p className='mt-4 text-gray-800'>
          Amenities
        </p>

        <div className='flex flex-col max-w-sm mt-1 text-gray-400'>
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className='flex items-center gap-2'>
              <input
                type='checkbox'
                id={`amenities${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() =>
                  setInputs({
                    ...inputs,
                    amenities: {
                      ...inputs.amenities,
                      [amenity]: !inputs.amenities[amenity]
                    }
                  })
                }
              />

              <label htmlFor={`amenities${index + 1}`}>
                {amenity}
              </label>
            </div>
          ))}
        </div>

        <button
          type='submit'
          className='px-8 py-3 mt-8 text-white bg-blue-600 rounded hover:bg-blue-700'
        >
          Add Room
        </button>
      </form>
    </div>
  )
}

export default AddRoom