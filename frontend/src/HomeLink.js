import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function HomeLink (props) {
    console.debug(props)
    return (
        <Link to={props.to} style={{ textDecoration: "none"}}>
            <Button variant="outlined" size="large">
                {props.children}
            </Button>
        </Link>
    )
}