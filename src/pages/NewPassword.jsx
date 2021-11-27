import React from 'react';
import '@styles/NewPassword.scss';

//assets
import saleLogo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
	return (
		<div className="new-password">
			<div className="new-password-container">
				<img src={saleLogo} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Confirm" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;