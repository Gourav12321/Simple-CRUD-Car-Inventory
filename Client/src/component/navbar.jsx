import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div>
        <ul className='flex gap-10 text-2xl justify-center py-5 bg-slate-500'>
          <li className='cursor-pointer'><a href="/home">Home</a></li>
          <li className='cursor-pointer'><Link to='/add'>Add</Link></li>
          <li className='cursor-pointer'><Link to='/update'>Update</Link></li>
          
        </ul>
      </div>
      <Outlet/>
    </>
  );
}

export default Navbar;
