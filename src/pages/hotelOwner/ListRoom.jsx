import React, { useState } from 'react'
import Title from '../../components/Title'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {
  const [rooms] = useState(roomsDummyData)

  return (
    <div>
      <Title
        align='left'
        font='outfit'
        title='Room Listings'
        subTitle='View, edit, or manage all listed rooms. Keep information updated for users.'
      />

      <p className='mt-8 text-gray-500'>
        All Rooms
      </p>

      <div className='w-full max-w-5xl mt-4 overflow-y-auto text-left border border-gray-300 rounded-lg max-h-96'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 py-3 font-medium text-gray-800'>
                Name
              </th>

              <th className='px-4 py-3 font-medium text-gray-800 max-sm:hidden'>
                Facility
              </th>

              <th className='px-4 py-3 font-medium text-gray-800'>
                Price / Night
              </th>

              <th className='px-4 py-3 font-medium text-center text-gray-800'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {rooms.map((item) => (
              <tr key={item._id}>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>
                  {item.roomType}
                </td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.amenities.join(', ')}
                </td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>
                  ${item.pricePerNight}
                </td>

                <td className='px-4 py-3 text-center border-t border-gray-300'>
                  <button className='px-4 py-1 mr-2 text-white bg-blue-600 rounded hover:bg-blue-700'>
                    Edit
                  </button>

                  <button className='px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom