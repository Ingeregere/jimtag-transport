import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/vehicules', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/annonce', state: 'formElementsMenuOpen'},
      {path:'/image-slide', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/contacts', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-category"><Trans>Administrateur</Trans></li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/admin">
              <span className="icon-bg"><i className="mdi mdi-cube menu-icon"></i></span>
              <span className="menu-title"><Trans>Tableau de bord</Trans></span>
            </Link>
          </li>
          <li className="nav-item nav-category"><Trans>Contrôler des Vehicules</Trans></li>
          <li className={ this.isPathActive('/vehicules') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-crosshairs-gps menu-icon"></i></span>
              <span className="menu-title"><Trans>Vehicules</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/marques') ? 'nav-link active' : 'nav-link' } to="/vehicules/marques"><Trans>Gérer les marques</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/categories') ? 'nav-link active' : 'nav-link' } to="/vehicules/categories"><Trans>Gérer les categories</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/modèles') ? 'nav-link active' : 'nav-link' } to="/vehicules/modèles"><Trans>Gérer les modèles</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/pays') ? 'nav-link active' : 'nav-link' } to="/vehicules/pays"><Trans>Gérer les pays</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/carrosseries') ? 'nav-link active' : 'nav-link' } to="/vehicules/carrosseries"><Trans>Gérer les carrosseries</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/attribuer_vehicules') ? 'nav-link active' : 'nav-link' } to="/vehicules/attribuer_vehicules"><Trans>Attribuer les vehicules</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/vehicules/gérer_vehicules') ? 'nav-link active' : 'nav-link' } to="/vehicules/gérer_vehicules"><Trans>Gérer les vehicules</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/contacts') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('iconsMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-contacts menu-icon"></i></span>
              <span className="menu-title"><Trans>Contact des clients</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.iconsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/contacts/clients') ? 'nav-link active' : 'nav-link' } to="/contacts/clients"><Trans>Contacts véhicule</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/contacts/question') ? 'nav-link active' : 'nav-link' } to="/contacts/question"><Trans>Contact question</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/annonce') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('formElementsMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-format-list-bulleted menu-icon"></i></span>
              <span className="menu-title"><Trans>Annonces</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.formElementsMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/annonce/gérer_annonces') ? 'nav-link active' : 'nav-link' } to="/annonce/gérer_annonces"><Trans>Gérer les annonces</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <br />

          <li className={ this.isPathActive('/image-slide') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('tablesMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-table-large menu-icon"></i></span>
              <span className="menu-title"><Trans>Slide & Article</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.tablesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/image-slide/image-slide') ? 'nav-link active' : 'nav-link' } to="/image-slide/image-slide"><Trans>Image slide</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/image-slide/image-publicite') ? 'nav-link active' : 'nav-link' } to="/image-slide/image-publicite"><Trans>Image Publicité</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <br/>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="icon-bg"><i className="mdi mdi-lock menu-icon"></i></span>
              <span className="menu-title"><Trans>Pages d'utilisateur</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/AllUser') ? 'nav-link active' : 'nav-link' } to="/user-pages/utilisateur"><Trans>Utilisateur</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/role') ? 'nav-link active' : 'nav-link' } to="/user-pages/role"><Trans>Role</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);