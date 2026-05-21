import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title
        align='left'
        font='outfit'
        title='Dashboard'
        subTitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.'
      />

      <div className='flex flex-wrap gap-4 my-8'>
        <div className='flex p-4 pr-8 bg-blue-50 border border-blue-100 rounded'>
          <img
            src={assets.totalBookingIcon}
            alt='booking'
            className='h-10 max-sm:hidden'
          />

          <div className='flex flex-col font-medium sm:ml-4'>
            <p className='text-lg text-blue-500'>
              Total Bookings
            </p>

            <p className='text-base text-neutral-500'>
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        <div className='flex p-4 pr-8 bg-blue-50 border border-blue-100 rounded'>
          <img
            src={assets.totalRevenueIcon}
            alt='revenue'
            className='h-10 max-sm:hidden'
          />

          <div className='flex flex-col font-medium sm:ml-4'>
            <p className='text-lg text-blue-500'>
              Total Revenue
            </p>

            <p className='text-base text-neutral-500'>
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      <h2 className='mb-5 text-xl font-medium text-blue-950/70'>
        Recent Bookings
      </h2>

      <div className='w-full max-w-3xl overflow-y-scroll text-left border border-gray-300 rounded-lg max-h-80'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-4 py-3 font-medium text-gray-800'>
                User Name
              </th>

              <th className='px-4 py-3 font-medium text-gray-800 max-sm:hidden'>
                Room Name
              </th>

              <th className='px-4 py-3 font-medium text-center text-gray-800'>
                Total Amount
              </th>

              <th className='px-4 py-3 font-medium text-center text-gray-800'>
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className='px-4 py-3 text-gray-700 border-t border-gray-300'>
                  {item.user.username}
                </td>

                <td className='px-4 py-3 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.room.roomType}
                </td>

                <td className='px-4 py-3 text-center text-gray-700 border-t border-gray-300'>
                  ${item.totalPrice}
                </td>

                <td className='px-4 py-3 border-t border-gray-300'>
                  <div className='flex justify-center'>
                    <button
                      className={`px-3 py-1 text-xs rounded-full ${
                        item.isPaid
                          ? 'text-green-700 bg-green-200'
                          : 'text-yellow-700 bg-yellow-200'
                      }`}
                    >
                      {item.isPaid ? 'Completed' : 'Pending'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard