import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getRemainingTimeUntilMsTimestamp } from './component/Utilizies';

function Copyright(props) {

	const defaultRemainingTime = {
		seconds: '00',
		minutes: '00',
		hours: '00',
		days: '00'
	}

	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(1659983662000);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [1659983662000]);
	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Your Website
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const theme = createTheme();

export default function SignInSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(bg-coming-soon.jpeg)',
						backgroundRepeat: 'no-repeat',
						
						backgroundColor: (t) =>
							t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>

					<Grid item style={{justifyContent:"center", alignItems:"center", display:"flex",flexDirection:"column", height:"100%"}}>
						<img src="logo.jpg" style={{height:"40%", width:"40%", objectFit:"contain"}}/>
						<div style={{fontWeight:900, fontSize:25, color:"#ffffff"}}>Website Coming Soon! </div>
						
					</Grid>
				</Grid>

				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
							<TextField
								margin="normal"
								required
								fullWidth
								name="Full Name"
								label="Full Name"
								type="Full Name"
								id="Full Name"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="Telephone Number"
								label="Telephone Number"
								type="Telephone Number"
								id="Telephone Number"
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="City"
								label="City"
								type="City"
								id="City"
							/>

							<div></div>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Submit
              </Button>
				<div style={{fontSize:12, textAlign:"start", color:"grey"}}>Please fill out this form in order to receive discounts and promotional offers from VIP FLEETS </div>			
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}