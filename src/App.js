import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/authHook';

import Admin from './quotes/pages/Admin';
import NewQuote from './quotes/pages/NewQuote';
import Home from './pages/HomePage/Home';
import Authors from './author/pages/Authors';
import MainNavigation from './shared/components/Navigation/Header/MainNavigation';
import Footer from './shared/components/Navigation/Footer/Footer';
import Services from './pages/Services/Services.jsx';
import About from './pages/About/About.jsx';
import AuthorQuotes from './quotes/pages/AuthorQuotes';
import QuoteScreen from './quotes/pages/QuoteScreen';
import UpdateQuote from './quotes/pages/UpdateQuote';
import Auth from './user/pages/Auth';

import User from './user/pages/User';

import './App.css';
import ForgotPassword from './user/pages/ForgotPassword';
import EditProfile from './user/components/EditProfile';
import PostComment from './quotes/components/singleQuote/PostComment';

const App = () => {
	const { token, login, logout, userId, role } = useAuth();

	// console.log('token: ', token, 'userd: ', userId, 'authorId: ', authorId);

	let routes;

	if (token) {
		routes = (
			<Fragment>
				<Route path='/gaialivsstil-reactApp' element={<Home />} />
				<Route
					path='/gaialivsstil-reactApp/services'
					element={<Services />}
				/>
				<Route path='/gaialivsstil-reactApp/about' element={<About />} />
				<Route
					path='/gaialivsstil-reactApp/isLoggingIn'
					element={<Navigate to='/' />}
				/>
				<Route path='/gaialivsstil-reactApp/forum' element={<Authors />} />
				<Route
					path='/gaialivsstil-reactApp/forum/quotes'
					element={<AuthorQuotes />}
				/>
				<Route
					path='/gaialivsstil-reactApp/forum/quotes/:quoteId'
					element={<QuoteScreen />}
				/>
				<Route
					path='/gaialivsstil-reactApp/user/account/myProfile'
					element={<User />}
				/>
				<Route
					path='/gaialivsstil-reactApp/user/account/editProfile'
					element={<EditProfile />}
				/>
				<Route
					path='gaialivsstil-reactApp/forum/quotes/:quoteId/createComment'
					element={<PostComment />}
				/>
				{/* author routes */}
				<Route path='/gaialivsstil-reactApp/admin' element={<Admin />} />
				<Route
					path='/gaialivsstil-reactApp/admin/addquote'
					element={<NewQuote />}
				/>
				<Route
					path='/gaialivsstil-reactApp/forum/admin/editQuote/:quoteId'
					element={<UpdateQuote />}
				/>
			</Fragment>
		);
	} else {
		routes = (
			<Fragment>
				<Route path='/gaialivsstil-reactApp' element={<Home />} />
				<Route
					path='/gaialivsstil-reactApp/services'
					element={<Services />}
				/>
				<Route path='/gaialivsstil-reactApp/about' element={<About />} />
				<Route
					path='/gaialivsstil-reactApp/isLoggingIn'
					element={<Auth />}
				/>
				<Route
					path='/gaialivsstil-reactApp/account/resetPassword'
					element={<ForgotPassword />}
				/>
				<Route
					path='/*'
					element={<Navigate to='/gaialivsstil-reactApp/isLoggingIn' />}
				/>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<AuthContext.Provider
				value={{
					isLoggedIn: !!token,
					token: token,
					userId: userId,
					role: role,
					login: login,
					logout: logout,
				}}
			>
				<MainNavigation />
				<main>
					<div className='min-h'>
						<Routes>
							{routes}
							<Route element={<Footer />} />

							{/* redirect if entered invalid url */}
							<Route
								path='/*'
								element={<Navigate to='/gaialivsstil-reactApp' />}
							/>
							<Route element={<Footer />} />
						</Routes>
					</div>
				</main>
				<Footer />
			</AuthContext.Provider>
		</Fragment>
	);
};

export default App;
