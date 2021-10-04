import React from 'react';
import './style.css'
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";
import {Link} from "react-router-dom";

const NavbarHeader = () => {
    return (
        <Navbar expand="lg" className={'navbarMain'}  fixed="top" >

            <Navbar.Brand as={Link} to={'/'} >
                <img
                    src="/logo.ico"
                    width="50"
                    height="40"
                    className="d-inline-block align-top logo"
                    alt="Jim tag logo"
                /> {" "}

            </Navbar.Brand>
            <NavLink  as={Link} to={'/'} className={'text-center topDescription'}>
                <span className={'JimTag'}>Jim Tag</span>
                <p className={'subJimTag'}>n<sup>o</sup>1 des petites annonces des poids lourds</p>
            </NavLink>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto ml-5 my-2 my-lg-0 ">
                    <Form className="d-flex mr-3">
                        <FormControl
                            type="search"
                            placeholder="Saisissez votre recherche"
                            className="mr-2 formSearch"
                            aria-label="Search"
                        />
                    </Form>

                    <NavLink  as={Link} to={'/nous-contact'}>
                        <button type="button" className="btn btn-dark btn-fw ">
                            <span className="icon-bg iconBtn"><i className="mdi mdi-arrow-right-bold-circle-outline"></i></span>
                            Nous contactez
                        </button>
                    </NavLink>
                    <NavLink as={Link} to={'/commande-camion'}>
                        <button type="button" className="btn btn-dark btn-fw ">
                            <span className="icon-bg iconBtn"><i className="mdi mdi-arrow-down-bold-circle-outline"></i></span>
                            Commandez un camion
                        </button>
                    </NavLink>
                    <NavLink as={Link} to={'/login'}>
                        <button type="button" className="btn btn-dark btn-fw ">
                            <span className="icon-bg iconBtn"><i className="mdi mdi-account-circle"></i></span>
                            Mon espace
                        </button>
                    </NavLink>

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavbarHeader;