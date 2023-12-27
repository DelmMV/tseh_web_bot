import React, { useState} from 'react';
import {UserLogin} from "../../api/ApiRequst.js";
import { useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const LoginPage = () => {
	
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [isRefreshing, setRefreshing] = useState(false);
	const navigate = useNavigate();
	const location = useLocation()
	const { signIn } = useAuth()
	
	const fromPage = location.state?.from?.pathname || '/'
	const handleSubmit = async (e) => {
		e.preventDefault()
		setRefreshing(true);
		try {
			await UserLogin({
				login: username,
				password: password,
			}).then((result) => {
				if (result.status === 200) {
					signIn(result.headers.token, ()=> (
							navigate(fromPage, {replace: true})
					));
				}
			})
		} catch (error) {
			console.error(error);
		} finally {
			setRefreshing(false)
		}
	}
	
	return (<div>
		<h1>Login Page</h1>
		<span>{fromPage}</span>
				<form className="row g-3 d-flex align-items-center flex-column h-100">
					<div className="col-auto">
						<label htmlFor="inputLogin" className="visually-hidden">Email</label>
						<input
								type="login"
								className="form-control"
								id="inputLogin"
								placeholder="Login"
								onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="col-auto">
						<label htmlFor="inputPassword2" className="visually-hidden">Password</label>
						<input
								type="password"
								className="form-control"
								id="inputPassword2"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="col-auto">
						<button onClick={handleSubmit} disabled={isRefreshing} type="submit" className="btn btn-primary mb-3">
							{!isRefreshing ? (<p>Войти</p>) : <p>Загрузка</p>}
						</button>
					</div>
				</form>
			</div>)
};

export default LoginPage;
