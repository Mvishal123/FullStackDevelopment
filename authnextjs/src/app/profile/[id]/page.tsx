import React from 'react'

const UserProfilePage = ({params}: any) => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <h1 className='text-4xl text-white mr-2'>Welcome!</h1>
        <span className='bg-orange-500 rounded-lg px-4 py-2 font-extrabold'>{params.id}</span>
    </div>
  )
}

export default UserProfilePage