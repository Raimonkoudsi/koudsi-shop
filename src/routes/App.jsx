import React from 'react';
import '@styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//context
import AppContext from '@context/AppContext';

//hooks
import useInitialState from '@hooks/useInitialState';

//containers
import Layout from '@containers/Layout';

//pages
import Home from '@pages/Home';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';


const App = () => {

	const initialState = useInitialState();

	return (
		<AppContext.Provider value ={initialState} >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/password-recovery" element={<RecoveryPassword />} />
						<Route exact path="/send-email" element={<SendEmail />} />
						<Route exact path="/new-password" element={<NewPassword />} />
						<Route exact path="/account" element={<MyAccount />} />
						<Route exact path="/signup" element={<CreateAccount />} />
						<Route exact path="/checkout" element={<Checkout />} />
						<Route exact path="/orders" element={<Orders />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;