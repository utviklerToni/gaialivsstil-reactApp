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
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/about' element={<About />} />
				<Route path='/isLoggingIn' element={<Navigate to='/' />} />
				<Route path='/forum' element={<Authors />} />
				<Route path='/forum/quotes' element={<AuthorQuotes />} />
				<Route path='/forum/quotes/:quoteId' element={<QuoteScreen />} />
				<Route path='/user/account/myProfile' element={<User />} />
				<Route path='/user/account/editProfile' element={<EditProfile />} />
				<Route
					path='/forum/quotes/:quoteId/createComment'
					element={<PostComment />}
				/>
				{/* author routes */}
				<Route path='/admin' element={<Admin />} />
				<Route path='/admin/addquote' element={<NewQuote />} />
				<Route
					path='/forum/admin/editQuote/:quoteId'
					element={<UpdateQuote />}
				/>
			</Fragment>
		);
	} else {
		routes = (
			<Fragment>
				<Route path='/' element={<Home />} />
				<Route path='/services' element={<Services />} />
				<Route path='/about' element={<About />} />
				<Route path='/isLoggingIn' element={<Auth />} />
				<Route path='/account/resetPassword' element={<ForgotPassword />} />
				<Route path='/*' element={<Navigate to='/isLoggingIn' />} />
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
							<Route path='/*' element={<Navigate to='/' />} />
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
