import React, { useState } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { useHistory, Link } from "react-router-dom"

export default function Register ({signup}) {
    const history = useHistory()
    const DEFAULTFORMDATA = {
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(DEFAULTFORMDATA)
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }
    const handleSubmit = async () => {
        const res = await signup(formData)
        console.log(res)
        if (res) {
            history.push("/")
        }
    }
    return (
        <>
            <Grid container align="center" justifyContent="center" spacing={2} direction="column">
                <Grid item xs={12} style={{ background: '#ffc107', color: "#121212"}}>
                    <Typography variant="h1" component="div">
                        Register
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Email" name="email" id="email" variant="filled" value={formData.email} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="First Name" name="firstName" id="firstName" variant="filled" value={formData.firstName} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Last Name" name="lastName" id="lastName" variant="filled" value={formData.lastName} onChange={handleChange}/>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing={2} sx={{ mt: 3}}>
                <Grid item align="right">
                    <Button onClick={handleSubmit} size="large" variant="outlined">
                        Register
                    </Button>
                </Grid>
                <Grid item align="left">
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <Button variant="outlined" size="large">
                            Home
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}