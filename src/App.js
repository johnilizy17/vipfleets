import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAlert } from 'react-alert'
import axios from 'axios'
import Select from 'react-select'


const theme = createTheme();

export default function SignInSide() {
	const options = [
		{ value: 'Abuja(FCT)', label: 'Abuja(FCT)' },
		{ value: 'Lagos', label: 'Lagos' },
		{ value: 'London', label: 'London' },
		{ value: 'Port Harcourt', label: 'Port Harcourt' }
	  ]

	const alert = useAlert()
	const [Email, setEmail] = useState();
	const [clicked, setClicked] = useState(false)
	const [TelephoneNumber, setTelephoneNumber] = useState();
	const [FullName, setFullName] = useState();
	const [City, setCity] = useState();
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(Email, City.value, TelephoneNumber, FullName)
		axios({
			method: 'post',
			url: ' https://pure-crag-36612.herokuapp.com/api/auth/register',
			header: {
				"accept": "application/json",
				"Content-Type": "application/json"
			},
			data: {
				"FullName": FullName,
				"TelephoneNumber": TelephoneNumber,
				"City": City.value,
				"Email": Email
			}
		}).then((res) => {
			if (res.data === "user not found" || res.data === "wrong password") {
				alert("Email already registered")
			} else {
				console.log(res.data)
				setClicked(true)
				alert.show("successful")
			}
		}).catch((err) => {
			alert.show("Please complete all the form")
		})
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
						backgroundImage: 'url(phone.jpg)',
						backgroundRepeat: 'no-repeat',

						backgroundColor: (t) =>
							t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>

					<Grid item style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", height: "100%" }}>
						<img src="logo.jpg" style={{ height: "40%", width: "40%", objectFit: "contain" }} />
						<div style={{ fontWeight: 900, fontSize: 25, color: "#ffffff" }}>Website Coming Soon! </div>

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
								onChange={(e) => { setFullName(e.target.value) }}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={(e) => { setTelephoneNumber(e.target.value) }}
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
								onChange={(e) => { setEmail(e.target.value) }}
								name="email"
								autoComplete="email"
								autoFocus
								style={{marginBottom:15}}
							/>
							 <Select 
							 onChange={setCity}
							 options={options}
							 placeholder="Location of hire"
							 />
							<div></div>
							<Button
								type="submit"
								fullWidth
								style={!clicked ?{backgroundColor:'#3f48cc'}: {backgroundColor:'grey'}}
								variant="contained"
								disabled={clicked}
								sx={{ mt: 3, mb: 2 }}
							>
								Submit
              </Button>
							<div style={{ fontSize: 12, textAlign: "start", color: "grey", marginBottom:10 }}>Please fill out this form in order to receive discounts and promotional offers from VIP FLEETS </div>
							<div style={{ fontSize: 12, textAlign: "start", color: "grey" }}>For a quick quotation send a mail to <a href="mailto:enqire@vipfleets.io"> enqire@vipfleets.io</a> </div>
						</Box>
					</Box>
				</Grid>
				
			<div style={{position:"fixed", bottom:0, fontSize:12, width:"100vw" }}><div style={{color:"#ffffff", backgroundColor:"#3f48cc", textAlign:"center"}}>@2022 VIP FLEETS LTD. All rights reserved</div> </div>
			</Grid>
		</ThemeProvider>
	);
}