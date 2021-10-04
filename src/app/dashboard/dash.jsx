import React, {useEffect, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import AllServices from './DashboardService'
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import {Link} from "react-router-dom";

const Dash = () => {
    const [countAllCommandsByCreatedAt, setCountAllCommandsByCreatedAt] = useState('')
    const [countAllCommands, setCountAllCommands] = useState('')
    const [countAllTransports, setCountAllTransports] = useState('')
    const [countAllContactByCreatedAt, setCountAllContactByCreatedAt] = useState('')


    const CountAllCommandsByCreatedAt = () => {
        AllServices.getCountAllCommandsByCreatedAt().then((response)=>{
            setCountAllCommandsByCreatedAt(response.data)
        })
    }
    const CountAllContactByCreatedAt = () => {
        AllServices.getCountAllContactCreatedAt().then((response)=>{
            setCountAllContactByCreatedAt(response.data)
        })
    }
    const CountAllCommands = () => {
        AllServices.getCountAllCommands().then((response)=>{
            setCountAllCommands(response.data)
        })
    }

    const CountAllTransports = () => {
        AllServices.getCountAllTransport().then((response)=>{
            setCountAllTransports(response.data)
        })
    }
    useEffect(()=>{
        CountAllCommandsByCreatedAt()
        CountAllTransports()
        CountAllCommands()
        CountAllContactByCreatedAt()
    })

    return (
        <div>

            <div>
                <div className="d-sm-flex justify-content-between align-items-start">
                    <h2 className="text-dark font-weight-bold mb-2">Tableau de bord</h2>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="justify-content-between align-items-center tab-transparent">
                            <Tabs defaultActiveKey="Business" className="nav">
                                <Tab eventKey="Business" title="Quelques Rapports">
                                    <div>
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Tous les commandes reçues.</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">{countAllCommands}</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-order">
                                                                        <stop offset="0%" stopColor="#1579ff"/>
                                                                        <stop offset="100%" stopColor="#7922e5"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-order"
                                                                                             value={100}>
                                                                <div>
                                                                    <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Tous les commandes par jour</p>
                                                        <Link to={'/annonce/gérer_annonces'}>
                                                            <button type="button" className="btn btn-primary btn-fw">Voir tout <sup className={'text-dark'}>{countAllCommands}</sup></button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Tous les commandes par jour.</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">{countAllCommandsByCreatedAt}</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#f5515f"/>
                                                                        <stop offset="100%" stopColor="#9f041b"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-followers"
                                                                                             value={100}>
                                                                <div>
                                                                    <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Tous les commandes par jour.</p>
                                                        <Link to={'/commandes/par-jour'}>
                                                            <button type="button" className="btn btn-primary btn-fw">Voir tout <sup className={'text-dark'}>{countAllCommandsByCreatedAt}</sup></button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                                                <div className="card">
                                                    <div className="card-body text-center">
                                                        <h5 className="mb-2 text-dark font-weight-normal">Tous les contacts reçus par jour.</h5>
                                                        <h2 className="mb-4 text-dark font-weight-bold">{countAllContactByCreatedAt}</h2>
                                                        <div className="px-4 d-flex align-items-center">
                                                            <svg width="0" height="0">
                                                                <defs>
                                                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                        <stop offset="0%" stopColor="#fad961"/>
                                                                        <stop offset="100%" stopColor="#f76b1c"/>
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                            <CircularProgressbarWithChildren className="progress-impressions"
                                                                                             value={100}>
                                                                <div>
                                                                    <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                                                </div>
                                                            </CircularProgressbarWithChildren>
                                                        </div>
                                                        <p className="mt-4 mb-0">Tous les contacts reçus par jour.</p>
                                                        <Link to={'/contacts/recus-par-jour'}>
                                                            <button type="button" className="btn btn-primary btn-fw">Voir tout <sup className={'text-dark'}>{countAllContactByCreatedAt}</sup></button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                                                    <div className="card">
                                                        <div className="card-body text-center">
                                                            <h5 className="mb-2 text-dark font-weight-normal">Tous les Vehicules que nous avons. </h5>
                                                            <h2 className="mb-4 text-dark font-weight-bold">{countAllTransports}</h2>
                                                            <div className="px-4 d-flex align-items-center">
                                                                <svg width="0" height="0">
                                                                    <defs>
                                                                        <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                            <stop offset="0%" stopColor="#b4ec51"/>
                                                                            <stop offset="100%" stopColor="#429321"/>
                                                                        </linearGradient>
                                                                    </defs>
                                                                </svg>
                                                                <CircularProgressbarWithChildren className="progress-visitors" value={100}>
                                                                    <div>
                                                                        <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                                                                    </div>
                                                                </CircularProgressbarWithChildren>
                                                            </div>
                                                            <p className="mt-4 mb-0">Tous les vehicules que nous avons.</p>
                                                            <Link to={'/vehicules/gérer_vehicules'}>
                                                                <button type="button" className="btn btn-primary btn-fw">Voir tout <sup className={'text-dark'}>{countAllTransports}</sup></button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                        </div>

                                    </div>
                                </Tab>

                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash;