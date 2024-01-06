import './Login.css'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Login() {

	const [toAdmin, setToAdmin] = useState<boolean>(false)
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		document.title = "TCG Anime - Login"
		// check if in the path if there is admin
		if (window.location.pathname === '/admin/login') {
			setToAdmin(true)
			document.title = "TCG Anime - Admin Login"
		}
	}, [])

	function LoginFunction() {
		if (username === '' || password === '') {
			alert('Please fill all the form')
			return
		}

		let search = `http://localhost:8000/${(toAdmin) ? 'admin' : ''}/user/login`

		fetch(search, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ credential: username, password})
		}).then((response: Response) => {
			if (response.status !== 200) {
				response.json().then((data: any) => {
					alert(data.message)
				})
			} else {
				response.json().then((data: any) => {
					localStorage.setItem('token', data.token)
					localStorage.setItem('refreshToken', data.refresh_token)
					localStorage.setItem('admin', toAdmin.toString())
					window.location.href = '/'
				})
			}
		}).catch((err: Error) => {
			console.log(err.message)
		})
	}

	return (
		<div className="login">
			<div className="login__header">
				<h1 className="login__h1">TCG Anime</h1>
				{
					(!toAdmin) ?
						<h2 className="login__h2">Login</h2>
						:
						<h2 className="login__h2">Admin Login</h2>
				}
			</div>
			<div className="login__body">
				<Box className="login__row">
					<AccountCircle className="login__icon" />
					<TextField
						className="login__input"
						label="Username or Email"
						variant="standard"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						sx={{
							input: {
								color: '#A0CCDA',
								opacity: 0.8,
								fontSize: '2em',
								margin: 'auto 1em',
								"&::placeholder": {
									opacity: 1,
									fontSize: '3em',
								},
							},
							label: { color: '#C6D8D3', fontSize: '1.75em', margin: 'auto 1em' },
						}}
						style={{
							width: '100%'
						}}
					/>
				</Box>
				<Box className="login__row">
					<AccountCircle className="login__icon" />
					<TextField
						className="login__input"
						label="Password"
						variant="standard"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type={visible ? "text" : "password"}
						sx={{
							input: {
								color: '#A0CCDA',
								opacity: 0.8,
								fontSize: '2em',
								margin: 'auto 1em',
								"&::placeholder": {
									opacity: 1,
									fontSize: '3em',
								},
							},
							label: { color: '#C6D8D3', fontSize: '1.75em', margin: 'auto 1em' },
						}}
						style={{
							width: '100%'
						}}
					/>
					{
						(visible) ?
							<VisibilityOutlinedIcon className="login__icon" onClick={() => setVisible(false)} />
							:
							<VisibilityOffOutlinedIcon className="login__icon" onClick={() => setVisible(true)} />
					}
				</Box>
			</div>
			<div className="login__footer">
				<Button
					variant='contained'
					color='primary'
					style={{
						textTransform: 'none',
						fontSize: '1.5em',
						fontWeight: 'bold',
						boxShadow: '0px 5px 5px -5px #2d2a32',
						borderRadius: '10px',
						width: '100%'
					}}
					onClick={() => LoginFunction()}
				>
					Login
				</Button>
				<div className="login__subtext">
					<p className="login__p">Forgot password?</p>
					{
						(!toAdmin) ?
							<p
								className="login__p"
								onClick={() => window.location.href = '/register'}
							> Don't have an account ? Register </p>
							:
							<></>
					}
				</div>
			</div>
		</div>
	)
}