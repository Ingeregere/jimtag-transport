import React, {useEffect, useState} from 'react';
import AllServices from "./Service";
import {Link} from "react-router-dom";



const Index= () => {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        getAllUserProfile()

    },[])

    const getAllUserProfile = () =>{
        AllServices.getAllUserProfile().then((response) =>{
            setUsers(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les utilisateurs </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/user-pages/ajouter_user'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">
                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les utilisateurs</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Nom</th>
                                        <th >Prénom</th>
                                        <th >Nom d'utilisateur</th>
                                        <th >Mobile</th>
                                        <th >Adresse</th>
                                        <th >Date de naissance</th>
                                        <th >Pays</th>
                                        <th >Sex</th>
                                        <th >role</th>
                                        <th >Modifier</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>

                                                <td>{b.firstName}</td>
                                                <td>{b.lastName}</td>
                                                <td>{b.username}</td>
                                                <td>{b.mobile}</td>
                                                <td>{b.address}</td>
                                                <td>{b.birthday}</td>
                                                <td>{b.country}</td>
                                                <td>{b.sex}</td>
                                                <td>{b.role}</td>
                                                <td>
                                                    <Link to={`/user-pages/editer_user/${b.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-pen "></i>Editer</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Index
