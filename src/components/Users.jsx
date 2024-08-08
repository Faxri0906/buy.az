import React from 'react'

function Users() {
  return (
    <div className='bg-gray-300 px-40 w-full h-[290px] flex justify-between text-center items-center mt-auto'>
        <div className='flex flex-col gap-10 items-center'>
            <h1 className='font-bold text-7xl text-[#5E2BFF]'>100K+</h1>
            <h2 className='text-2xl font-semibold text-gray-500'>USERS</h2>
        </div>
        <div className='flex flex-col gap-10 items-center'>
            <h1 className='font-bold text-7xl text-[#5E2BFF]'>500K+</h1>
            <h2 className='text-2xl font-semibold text-gray-500'>CLASSFIELDS</h2>
        </div>
        <div className='flex flex-col gap-10 items-center'>
            <h1 className='font-bold text-7xl text-[#5E2BFF]'>25000+</h1>
            <h2 className='text-2xl font-semibold text-gray-500'>USERS/DAY</h2>
        </div>
    </div>
  );
};

export default Users;