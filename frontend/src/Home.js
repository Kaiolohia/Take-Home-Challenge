import React from "react";
import HomeLink from "./HomeLink";
import { Typography, Grid } from "@mui/material";

export default function Home () {
    return (
        <Grid container justifyContent="center" align="center" spacing={2}>
            <Grid item xs={12} style={{ background: '#ffc107', color: "#121212"}}>
                <Typography variant="h1" component="div">Yodlr Design Challenge</Typography>
            </Grid>
            <Grid item xs={2}>
                <HomeLink to="/register">
                    Register
                </HomeLink>
            </Grid>
            <Grid item xs={2}>
                <HomeLink to="/admin">
                    Admin Panel
                </HomeLink>
            </Grid>
        </Grid>
    )
}
