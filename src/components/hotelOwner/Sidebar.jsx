import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: 'Dashboard',
      path: '/owner',
      icon: assets.dashboardIcon
    },
    {
      name: 'Add Room',
      path: '/owner/add-room',
      icon: assets.addIcon
    },
    {
      name: 'List Room',
      path: '/owner/list-room',
      icon: assets.listIcon
    }
  ]

  return (
    <div className='flex flex-col w-16 md:w-64 h-full pt-4 text-base border-r border-gray-300 transition-all duration-300'>
      {sidebarLinks.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/owner'}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 md:px-8 py-3 transition-all ${
              isActive
                ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600'
                : 'border-white text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <img
            src={item.icon}
            alt={item.name}
            className='w-6 h-6'
          />

          <p className='hidden md:block'>
            {item.name}
          </p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar