import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeCotext } from '../context/ThemeContextProvider'

const Navbar = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
    const {theme, toggleTheme} = useContext(ThemeCotext)
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
        <h1>Dashboard</h1>
        <button className='text-2xl text-dark' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <button onClick={handleLogout} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Logout
</button>
    </div>
  )
}

export default Navbar