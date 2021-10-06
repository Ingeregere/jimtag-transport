import React, {useEffect, useState} from 'react';
import './style.css'
import AllServices from "./CategorieServices";
import {Link, useParams} from "react-router-dom";

const Marque= () => {
    const [categories, setCategories] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        getAllCategory()
    },[])

    const getAllCategory = () =>{
        AllServices.getAllCategory().then((response) =>{
            setCategories(response.data)
        })
    }
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Voir tous les catagories </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={'/admin'}>
                            <button type="button" className="btn btn-primary btn-fw">
                                Tableau de bord
                            </button>
                        </Link>
                    </ol>
                </nav>
            </div>
            <div className="row">

                <div className="col-lg-12 grid-margin stretch-card ">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Tous les Categories</h4>

                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className={'text-center'}>
                                        <th >N<sup>o</sup></th>
                                        <th >Name</th>
                                        <th >Name Image</th>
                                        <th >Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        categories.map((c,index,viewImageCategoryById) =>(
                                            <tr key={c.id} className={'text-center'}>
                                                <td >{index+1}</td>
                                                <td>{c.categoryItem}</td>
                                                <td>{c.imageCategoryItem} </td>
                                                <td>
                                                    <Link to={`/vehicules/categories/voir-image/${c.id}`} className={'text-decoration-none'}>
                                                        <span className="icon-bg "><i className="mdi mdi-camera-image "></i>Image</span>
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

export default Marque
