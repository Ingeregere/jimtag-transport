import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './share/Navbar';
import Sidebar from './share/Sidebar';
import Footer from './share/Footer';
import { withTranslation } from "react-i18next";

class App extends Component {

  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render () {

    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar/> : '';
    let footerComponent = !this.state.isFullPageLayout ? <Footer/> : '';
    return (

      <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          { sidebarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    // console.log("ROUTE CHANGED");
    const { i18n } = this.props;
    const body = document.querySelector('body');
    if(this.props.location.pathname === '/layout/RtlLayout') {
      body.classList.add('rtl');
      i18n.changeLanguage('ar');
    }
    else {
      body.classList.remove('rtl')
      i18n.changeLanguage('en');
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/admin",
      "/vehicules/marques",
      "/vehicules/categories",
      "/vehicules/modèles",
      "/vehicules/pays",
      "/vehicules/carrosseries",
      "/vehicules/attribuer_vehicules",
      "/vehicules/gérer_vehicules",
      "/vehicules/dropdowns",
      "/vehicules/typography",
      "/image-slide/basic-table",
      "/annonce/gérer_annonces",
      "/annonce/nouvelle_annonces",
      "/contacts/clients",
      "/vehicules/ajouter_marques",
      "/vehicules/ajouter_pays",
      "/vehicules/ajouter_carrosserie",
      "/image-slide/image-publicite",
      "/image-slide/ajouter-publicite",
      "/image-slide/image-slide",
      "/vehicules/ajouter_models",
      "/user-pages/utilisateur",
      "/user-pages/ajouter_user",
      "/user-pages/editer_user",
      "/user-pages/role",
      "/user-pages/ajouter_role",
      "/vehicules/ajouter_category",
      "/image-slide/ajouter-image",
      "/commandes/par-jour",
      "/contacts/recus-par-jour",
      "/vehicules/categories/voir-image/",
        '/vehicules/edit-transport/',
      "/contacts/question",

   ];
    const currentURL = window.location.pathname
    const idEditer = currentURL.slice(18,1000000000)
    const idMarques = currentURL.slice(18,1000000000)
    const idModel = currentURL.slice(17,1000000000)
    const idModelEditer = currentURL.slice(14,1000000000)
    const idpays = currentURL.slice(20,1000000000)
    const idpaysEditer = currentURL.slice(23,1000000000)
    const idcarro = currentURL.slice(27,1000000000)
    const idactivedesactive = currentURL.slice(28,1000000000)
    const idrole = currentURL.slice(24,1000000000)
    const iduserEditer = currentURL.slice(24,1000000000)
    const idcategory = currentURL.slice(27,1000000000)
    const idslide = currentURL.slice(20,1000000000)
    const idvoirimageCat = currentURL.slice(33,1000000000)
    const imagetransport = currentURL.slice(25,1000000000)
    const edittransport = currentURL.slice(26,1000000000)

    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {

      if (
          this.props.location.pathname === fullPageLayoutRoutes[i] ||
          this.props.location.pathname === `/vehicules/editer/${idEditer}` ||
          this.props.location.pathname === `/vehicules/marque/${idMarques}`||
          this.props.location.pathname === `/vehicules/model/${idModel}`||
          this.props.location.pathname === `/vehicules/categories/voir-image/${idvoirimageCat}`||
          this.props.location.pathname === `/vehicules/category/editer/${idcategory}`||
          this.props.location.pathname === `/model/editer/${idModelEditer}`||
          this.props.location.pathname === `/vehicules/veh_pays/${idpays}`||
          this.props.location.pathname === `/vehicules/veh_carrosserie/${idcarro}`||
          this.props.location.pathname === `/user-pages/editer_role/${idrole}`||
          this.props.location.pathname === `/user-pages/editer_user/${iduserEditer}`||
          this.props.location.pathname === `/vehicules/pays/editer/${idpaysEditer}` ||
          this.props.location.pathname === `/vehicules/ajouter_image/${imagetransport}` ||
          this.props.location.pathname === `/vehicules/active-desactive/${idactivedesactive}` ||
          this.props.location.pathname === `/vehicules/edit-transport/${edittransport}` ||
          this.props.location.pathname === `/image-slide/editer/${idslide}`


      ) {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
      }
    }
  }

}

export default withTranslation()(withRouter(App));
