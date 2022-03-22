import React from "react";
import { Grid, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import API from "./helpers/api";
import { Link } from "react-router-dom"

export default function AdminPanel () {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        const getUsers = async () => {
            const res = await API.getUsers()
            setUsers(res)
        }
        getUsers()
    }, [])
    return (
        <Grid container justifyContent="center" align="center" spacing={2}>
            <Grid item xs={12} style={{ background: "#ffc107", color: "#121212"}}>
                <Typography variant="h1" component="div">
                    Admin Panel
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Link to="/home" style={{ textDecoration: "none"}}>
                    <Button variant="outlined" size="large">
                        Home
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Id
                                </TableCell>
                                <TableCell align="right">
                                    Email
                                </TableCell>
                                <TableCell align="right">
                                    First Name
                                </TableCell>
                                <TableCell align="right">
                                    Last Name
                                </TableCell>
                                <TableCell align="right">
                                    State
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((u) => (
                                <TableRow key={u.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>
                                        {u.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        {u.email}
                                    </TableCell>
                                    <TableCell align="right">
                                        {u.firstName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {u.lastName}
                                    </TableCell>
                                    <TableCell align="right">
                                        {u.state}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={3}>
                <Link to="/register" style={{ textDecoration: "none"}}>
                    <Button variant="outlined" size="large">
                        Register
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}