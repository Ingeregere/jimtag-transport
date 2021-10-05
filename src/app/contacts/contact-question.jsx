import React, {useEffect, useState} from 'react';
import '../vehicules/marques/style.css'
import AllServices from "../../Client/Component/Contact/Services";
import {Link, useParams} from "react-router-dom";

const Index= () => {
    const [contacts, setContacts] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllContact()
    },[])

    const getAllContact = () =>{
        AllServices.getAllContact().then((response) =>{
            setContacts(response.data)
        })
    }



    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un Contact </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/admin'}>
                            <button type="button" className="btn btn-primary btn-fw">Tableau de bord</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous FQA</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Nom</th>
                                        <th >Prénom</th>
                                        <th >Email</th>
                                        <th >Message</th>
                                        <th >Mobile</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        contacts.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.firstName}</td>
                                                <td>{b.lastName}</td>
                                                <td>{b.email}</td>
                                                <td>{b.message}</td>
                                                <td>{b.mobile}</td>

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
