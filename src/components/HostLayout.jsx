import React from 'react'
import { Link , Outlet} from 'react-router-dom'
export default function HostLayout() {
  return (
    <>
        <nav className='host-nav'>
            <Link to = '/host'>DashBorad</Link>
            <Link to = '/host/income'>Income</Link>
            <Link to = '/host/reviews'>Reviews</Link>
        </nav>
        <Outlet></Outlet>
    </>
  )
}
