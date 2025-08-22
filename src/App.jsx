import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useAuthState } from './components/useAuthState'

function LoginDropdown(){
  const [open, setOpen] = React.useState(false)
  return (
    <div className='dropdown'>
      <button className='btn' onClick={()=>setOpen(!open)}>Login ▾</button>
      {open && (
        <div className='dropdown-menu' onMouseLeave={()=>setOpen(false)}>
          <Link className='block px-4 py-2 hover:bg-gray-50' to='/signin'>Member Login</Link>
          <Link className='block px-4 py-2 hover:bg-gray-50' to='/admin'>Admin Login</Link>
        </div>
      )}
    </div>
  )
}

export default function App(){
  const nav = useNavigate()
  const { user } = useAuthState()
  const doSignOut = async ()=>{ await signOut(auth); nav('/'); }

  return (
    <div>
      <nav className='bg-white border-b sticky top-0 z-50'>
        <div className='container-narrow py-3 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <img src='/logo.png' alt='TNESA' className='h-9 w-9 rounded-lg' />
            <span className='font-bold text-tnesa-dark text-xl'>TNESA</span>
          </Link>
          <div className='flex items-center gap-6'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/directory' className='nav-link'>Directory</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact</Link>
            {!user ? <LoginDropdown /> : (<>
              <Link to='/dashboard' className='btn'>Dashboard</Link>
              <button className='btn' onClick={doSignOut}>Logout</button>
            </>)}
          </div>
        </div>
      </nav>
      <main className='container-narrow py-10 min-h-[70vh]'>
        <Outlet />
      </main>
      <footer className='border-t py-8 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} TNESA — Tamil Nadu Electronic Security Association
      </footer>
    </div>
  )
}
