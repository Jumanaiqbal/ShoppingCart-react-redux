// import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Dashboard />}></Route>
				<Route path='/Cart' element={<Cart />}></Route>
			</Route>
		)
	);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}
export default App;
