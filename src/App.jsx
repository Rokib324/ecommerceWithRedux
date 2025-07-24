import { Link, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <>
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 min-h-screen">
      <Outlet />
    </main>
    </>
  )
}