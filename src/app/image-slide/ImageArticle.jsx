import React, {useEffect, useState} from 'react';
import '../vehicules/marques/style.css'
import AllServices from "./Service";

import {Link, useParams} from "react-router-dom";



const Index= () => {

    const [articles, setArticles] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllArticles()
    },[])

    const getAllArticles = () =>{
        AllServices.getAllArticles().then((response) =>{
            setArticles(response.data)
        })
    }

    return (
        <div>
            <div className="page-header mainheader">
                <h3 className="page-title"> {id? "Editer": "Ajouter"} un article </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/image-slide/ajouter-publicite'}>
                            <button type="button" className="btn btn-primary btn-fw">Ajouter</button>
                        </Link>
                    </ol>
                </nav>
            </div>

            <div className="row maintable">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Articles</h4>

                            <div className="table-responsive ">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Name</th>
                                        <th >Description</th>
                                        <th >Titre</th>
                                        <th >Sous titre</th>
                                        <th >Modifier</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        articles.map((b,index) =>(
                                            <tr key={b.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{b.articleImage}</td>
                                                <td>{b.description}</td>
                                                <td>{b.title}</td>
                                                <td>{b.subTitle}</td>
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
