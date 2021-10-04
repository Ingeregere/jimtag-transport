import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './share/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const GererVehicule = lazy(() => import('./vehicules/gérer_vehicules'));
const Marque = lazy(() => import('./vehicules/marques'));
const UpdateMarque = lazy(() => import('./vehicules/marques/UpdateMarque'));
const AddBrand = lazy(() => import('./vehicules/marques/Add'));
const UpdateModel = lazy(() => import('./vehicules/modèles/UpdateModel'));
const AddModel = lazy(() => import('./vehicules/modèles/Add'));
const Model = lazy(() => import('./vehicules/modèles'));
const Category = lazy(() => import('./vehicules/categories'));
const VoirImageCategory = lazy(() => import('./vehicules/categories/PageImage'));
const Country = lazy(() => import('./vehicules/pays'));
const AddCountry = lazy(() => import('./vehicules/pays/Add'));
const UpdateCountry = lazy(() => import('./vehicules/pays/UpdatePays'));
const BodyWork = lazy(() => import('./vehicules/carrosseries'));
const AddBodywork = lazy(() => import('./vehicules/carrosseries/Add'));
const UpdateBodywork = lazy(() => import('./vehicules/carrosseries/UpdateCarrosserie'));
const Attribuer_vehicule = lazy(() => import('./vehicules/attribuer_vehicule'));
const AjouterImageTransport = lazy(() => import('./vehicules/gérer_vehicules/ImageTransport'));
const EnableAndDesable = lazy(() => import('./vehicules/gérer_vehicules/EnableDesable'));
const HomePage = lazy(()=>import('../Client/Pages/Home'))
const Tracteur = lazy(()=>import('../Client/Pages/Tracteur'))
const Porteur = lazy(()=>import('../Client/Pages/Porteur'))
const Semis = lazy(()=>import('../Client/Pages/Semis'))
const Divers = lazy(()=>import('../Client/Pages/Divers'))
const Pieces = lazy(()=>import('../Client/Pages/Pieces'))
const Detail = lazy(()=>import('../Client/Pages/Detail'))
const Contact = lazy(()=>import('../Client/Component/Modal'))
const DeposerAnnnonce = lazy(() => import('../Client/Pages/DeposerAnnonce'));
const GererAnnonce = lazy(() => import('./annonce/Annonce'));
const CommandePerDay = lazy(() => import('./dashboard/Commande-Per-Day'));
const ImageSlide = lazy(() => import('./image-slide'));
const UpdateImageSlide = lazy(() => import('./image-slide/UpdateImageSlide'));
const ImageArticle = lazy(() => import('./image-slide/ImageArticle'));
const AddArticle = lazy(() => import('./image-slide/AddArticle'));
const ContactUser = lazy(() => import('./contacts/contact-user'));
const ContactPerDay = lazy(() => import('./dashboard/ContactDay'));
const ContactFQA = lazy(() => import('./contacts/contact-question'));
const ContactCustomer = lazy(() => import('../Client/Pages/Contact'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const AllUser = lazy(() => import('./user-pages/AllUser'));
const Login = lazy(() => import('../Client/Pages/Login'));
const AddUser = lazy(() => import('./user-pages/Add'));
const AddSlide = lazy(() => import('./image-slide/AddSlide'));
const UpdateUser = lazy(() => import('./user-pages/UpdateUser'));
const UpdateCategory = lazy(() => import('./vehicules/categories/UpdateCategorie'));
const AddCategory = lazy(() => import('./vehicules/categories/Add'));
const Role = lazy(() => import('./Role'));
const AddRole= lazy(() => import('./Role/Add'));
const UpdateRole = lazy(() => import('./Role/UpdateRole'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/admin" component={ Dashboard } />
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/tracteurs" component={ Tracteur } />
          <Route exact path="/vehicules/category/editer/:id" component={ UpdateCategory } />
          <Route exact path="/vehicules/ajouter_category" component={ AddCategory } />
          <Route exact path="/porteurs" component={ Porteur } />
          <Route exact path="/image-slide/ajouter-image" component={ AddSlide } />
          <Route exact path="/vehicules/categories/voir-image/:id" component={ VoirImageCategory } />
          <Route exact path="/semis" component={ Semis } />
          <Route exact path="/divers" component={ Divers } />
          <Route exact path="/pièces" component={ Pieces } />
          <Route exact path={'/detail/:id'} component={ Detail } />
          <Route exact path={'/contact'} component={ Contact } />
          <Route exact path={'/nous-contact'} component={ ContactCustomer } />
          <Route path="/vehicules/marques" component={ Marque } />
          <Route path="/vehicules/ajouter_marques" component={ AddBrand } />
          <Route path="/vehicules/ajouter_carrosserie" component={ AddBodywork } />
          <Route path="/vehicules/veh_carrosserie/:id" component={ UpdateBodywork } />
          <Route path="/vehicules/marque/:id" component={UpdateMarque} />
          <Route path="/vehicules/editer/:id" component={Marque} />
          <Route path="/vehicules/categories" component={ Category } />
          <Route path="/vehicules/category/editer/:id" component={ UpdateCategory } />
          <Route path="/vehicules/modèles" component={ Model } />
          <Route path="/vehicules/ajouter_models" component={ AddModel } />
          <Route path="/vehicules/model/:id" component={UpdateModel} />
          <Route path="/model/editer/:id" component={ Model } />
          <Route path="/vehicules/veh_pays/:id" component={ UpdateCountry } />
          <Route path="/vehicules/ajouter_pays" component={ AddCountry } />
          <Route path="/vehicules/pays/editer:id" component={ Country } />
          <Route path="/vehicules/pays" component={ Country } />
          <Route path="/vehicules/carrosseries" component={ BodyWork } />
          <Route path="/vehicules/attribuer_vehicules" component={ Attribuer_vehicule } />
          <Route path="/vehicules/gérer_vehicules" component={ GererVehicule } />
          <Route path="/vehicules/ajouter_image/:id" component={ AjouterImageTransport } />
          <Route path="/vehicules/active-desactive/:id" component={ EnableAndDesable } />
          <Route path="/contacts/question" component={ ContactFQA } />
          <Route path="/image-slide/image-slide" component={ ImageSlide } />
          <Route path="/image-slide/editer/:id" component={ UpdateImageSlide } />
          <Route path="/image-slide/image-publicite" component={ ImageArticle } />
          <Route path="/image-slide/ajouter-publicite" component={ AddArticle } />
          <Route path="/annonce/gérer_annonces" component={ GererAnnonce } />
          <Route path="/commandes/par-jour" component={ CommandePerDay } />
          <Route path="/annonce/nouvelle_annonces" component={ DeposerAnnnonce } />
          <Route path="/commande-camion" component={ DeposerAnnnonce } />
          <Route path="/contacts/clients" component={ ContactUser } />
          <Route path="/contacts/recus-par-jour" component={ ContactPerDay } />
          <Route path="/user-pages/utilisateur" component={ AllUser } />
          <Route path="/user-pages/ajouter_user" component={ AddUser } />
          <Route path="/user-pages/edit_user/:id" component={ AddUser } />
          <Route path="/login" component={ Login } />
          <Route path="/user-pages/role" component={ Role } />
          <Route path="/user-pages/editer_role/:id" component={ UpdateRole } />
          <Route path="/user-pages/editer_user/:id" component={ UpdateUser } />
          <Route path="/user-pages/ajouter_role" component={AddRole } />
          <Route path="/s'inscrirer" component={ Register1 } />
          <Route exact path="*" component={ Error404 } />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;