import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { NavbarBrand, NavbarText, Navbar } from "reactstrap";

const Navigation = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`

const Nav = () => {
    return(
        <Navigation>
            <Navbar>
                <NavbarBrand>Lambda Eats</NavbarBrand>
                <Link to="/">
                    <NavbarText>Home</NavbarText>                    
                </Link>
                <NavbarText>Help</NavbarText>
            </Navbar>
        </Navigation>
    )
}

export default Nav;