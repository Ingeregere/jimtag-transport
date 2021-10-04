import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/admin"><img src={require('../../assets/images/logo.jpg')} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/admin"><img src={require('../../assets/images/logo.jpg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Rechercher"/>
              </div>
            </form>
          </div>
          <ul className="navbar-nav navbar-nav-right">

            <li className="nav-item nav-profile nav-language">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <div className="nav-profile-img">
                      {/*<img src={require("../../assets/images/faces/face28.png")} alt="profile" />*/}
                    </div>
                    <div className="nav-profile-text">
                      <p className="mb-1 text-black"><Trans>Administrateur</Trans></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <div className="p-3 text-center bg-primary">
                    {/*<img className="img-avatar img-avatar48 img-avatar-thumb" src={require("../../assets/images/faces/face28.png")} alt=""/>*/}
                  </div>
                  <div className="p-2">
                    <h5 className="dropdown-header text-uppercase pl-2 text-dark"><Trans>Utilisateurs Options</Trans></h5>
                    <div role="separator" className="dropdown-divider"></div>
                    <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" as={Link} to={'/'}>
                      <span><Trans>Déconnexion</Trans></span>
                      <i className="mdi mdi-lock ml-1"></i>
                      </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
