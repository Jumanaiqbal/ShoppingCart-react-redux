import { Outlet } from 'react-router-dom';
import NavBarPanel from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';

const RootLayout = () => {
	return (
		<>
			<Provider store={store}>
				<main>
					<NavBarPanel />
					<Outlet />
				</main>
			</Provider>
		</>
	);
};

export default RootLayout;
