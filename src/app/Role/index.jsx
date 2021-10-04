import React, {useEffect, useState} from 'react';
import AllServices from "./RoleServices";
import {Link, useParams} from "react-router-dom";


const Index= () => {

    const [roles, setRoles] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllRoles()

    },[])

    const getAllRoles = () =>{
        AllServices.getAllRoles().then((response) =>{
            setRoles(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un role </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/user-pages/ajouter_role'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les roles</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >index</th>
                                        <th >Name</th>
                                        <th >Modifier</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        roles.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.role}</td>
                                                <td>
                                                    <Link to={`/user-pages/editer_role/${b.id}`} className={'text-decoration-none'}>
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
