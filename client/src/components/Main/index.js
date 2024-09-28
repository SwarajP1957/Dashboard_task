import '../../index.css'
import Sidebar from "../../dashboard/sidebar";
import Navbar from "../../dashboard/Navbar";
import Dashboard from "../../dashboard/Dashboard1";
import ThemeContextProvider from "../../context/ThemeContextProvider";

const Main = () => {
	// const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };

	return (
		<ThemeContextProvider>
		<div>
				{/* <button  onClick={handleLogout}>
					Logout

				</button> */}
				
			<div className="flex">
				<Sidebar />
				<div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
							     dark:bg-gray-900 dark:text-white'>
					<Navbar />
					<div>
						          <Dashboard />
					</div>
				</div>
			</div>
		</div>

		</ThemeContextProvider>
	);
};

export default Main;


// import '../../index.css'
// // import Dashboard from './components/Dashboard'
// // import Navbar from './components/Navbar'
// import Sidebar from "../../dashboard/sidebar";
// // import ThemeContextProvider from './context/ThemeContextProvider'

// function Main() {

//   return (
//     // <ThemeContextProvider>
//     <div className='flex'>
//       <Sidebar />
//       {/* <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
//       dark:bg-gray-900 dark:text-white'>
//         <Navbar />
//         <div>
//           <Dashboard />
//         </div>
//       </div> */}
//     </div>
//     // </ThemeContextProvider>
//   )
// }

// export default Main


// import styles from "./styles.module.css";
// import '../../index.css'
// import Sidebar from "../../dashboard/sidebar";
// import Navbar from "../../dashboard/Navbar";
// import Dashboard from "../../dashboard/Dashboard1";
// import ThemeContextProvider from "../../context/ThemeContextProvider";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<ThemeContextProvider>
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>Dashboard</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout

// 				</button>

// 			</nav>
// 			<div className="flex">
// 				<Sidebar />
// 				<div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
// 							     dark:bg-gray-900 dark:text-white'>
// 					<Navbar />
// 					<div>
// 						          <Dashboard />
// 					</div>
// 				</div>
// 			</div>
// 			<h1 class="text-3xl font-bold underline text-red-600">
// 				Hello world!
// 			</h1>
// 		</div>

// 		</ThemeContextProvider>
// 	);
// };

// export default Main;