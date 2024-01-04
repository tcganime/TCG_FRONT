import './Register.css'
import { useState, useEffect} from 'react'
import { TextField, Box, Button } from '@mui/material'

import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')

    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)

    useEffect(() => {
        document.title = "TCG Anime - Register"
    }, [])

    function RegisterFunction() {
        if (password !== passwordConfirm) {
            alert("Passwords do not match")
            return
        }
    }

    return (
        <div className="register">
            <div className="register__header">
                <h1 className="register__h1">TCG Anime</h1>
                <h2 className="register__h2">Register</h2>
            </div>
            <div className="register__body">
                <Box className="register__row">
                    <AccountCircle className="register__icon" />
                    <TextField
                        className="register__input"
                        label="Username"
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{
							input: {
								color: '#A0CCDA',
								opacity: 0.8,
								fontSize: '2em',
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
                <Box className="register__row">
                    <AccountCircle className="register__icon" />
                    <TextField
                        className="register__input"
                        label="Email"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
							input: {
								color: '#A0CCDA',
								opacity: 0.8,
								fontSize: '2em',
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
                <Box className="register__row">
                    <AccountCircle className="register__icon" />
                    <TextField
                        className="register__input"
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
                            <VisibilityOutlinedIcon className="register__icon" onClick={() => setVisible(false)} />
                            :
                            <VisibilityOffOutlinedIcon className="register__icon" onClick={() => setVisible(true)} />
                    }
                </Box>
                <Box className="register__row">
                    <AccountCircle className="register__icon" />
                    <TextField
                        className="register__input"
                        label="Confirm Password"
                        variant="standard"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        type={visible2 ? "text" : "password"}
                        sx={{
							input: {
								color: '#A0CCDA',
								opacity: 0.8,
								fontSize: '2em',
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
                        (visible2) ?
                            <VisibilityOutlinedIcon className="register__icon" onClick={() => setVisible2(false)} />
                            :
                            <VisibilityOffOutlinedIcon className="register__icon" onClick={() => setVisible2(true)} />
                    }
                </Box> 
            </div>
            <div className="register__footer">
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
                    >Register
                </Button>
                <div className="register__subtext">
                    <p 
                        className="register__p"
                        onClick={() => window.location.href = '/login'}
                    >Already have an account? Login</p>
                </div>
            </div>
        </div>
    )
}