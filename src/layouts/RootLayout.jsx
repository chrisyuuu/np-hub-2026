import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: '#F4F3FC' }}>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  )
}
