import React, {useEffect, useState} from 'react';
import {Alert, Badge, Form} from 'react-bootstrap';
import AllServices from "./PaysService";
import {Link, useParams} from "react-router-dom";


const Country= () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        getAllCountry()

    },[])

    const getAllCountry = () =>{
        AllServices.getAllCountry().then((response) =>{
            setCountries(response.data)
        })
    }

    const saveCountry = (event) =>{
        event.preventDefault();
        const newCountry = { country }
        AllServices.postCountry( newCountry )
            .then(response=>{
                console.log('New country is added', response.data)
                setSuccess('true')
                setError('')
                setCountry('')
            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })

    }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    const showSuccess = () => (
        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success}</center> </strong>
        </Alert>
    )
    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les pays  </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/ajouter_pays'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>
            {
                showError()
            }
            {
                showSuccess()
            }
            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Pays</h4>

                            <div className="table-responsive">
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
                                        countries.map((c,index) =>(
                                            <tr key={c.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{c.country}</td>
                                                <td>
                                                        <Link to={`/vehicules/veh_pays/${c.id}`} className={'text-decoration-none'}>
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

export default Country
