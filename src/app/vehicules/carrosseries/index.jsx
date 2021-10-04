import React, {useEffect, useState} from 'react';
import './style.css'
import AllServices from "./CarrosseriesService";
import {Link, useHistory, useParams} from "react-router-dom";



const Index= () => {

    const [bodyworks, setBodyworks] = useState([])
    const [bodywork, setBodywork] = useState('')
    const {id} = useParams()

    useEffect(()=>{
        getAllBodywork()
        UpdateBodyworkById()

    },[])

    const getAllBodywork = () =>{
        AllServices.getAllBodywork().then((response) =>{
            setBodyworks(response.data)
        })
    }

    const UpdateBodyworkById = () =>{
        if(id){
            AllServices.getAllBodyworkById(id)
                .then(currentBrand =>{
                    setBodywork(currentBrand.data.bodywork)
                })
                .catch(error =>{
                    console.log('something went wrong', error)
                })
        }
    }


    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> Voir tous les Carrosseries </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/vehicules/ajouter_carrosserie'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Carrosseries</h4>

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
                                        bodyworks.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.bodywork}</td>
                                                <td>
                                                    <Link to={`/vehicules/veh_carrosserie/${b.id}`} className={'text-decoration-none'}>
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
