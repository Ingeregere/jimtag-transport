import React, {useState} from 'react';
import {Alert, Form} from 'react-bootstrap';
import AllServices from "./Service";
import './style.css'
import { useHistory } from "react-router-dom";


const Login =() =>{

      const [error, setError] = useState('')
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const history= useHistory()

    const isAuthenticate = (event) =>{
    event.preventDefault();
    const data = { username, password}
    AllServices.postAuthenticate(data)
        .then(response=>{
            if(response.data){
                history.push('/admin')
            }else{
                setUsername('')
                setPassword('')
                setError('false')
            }

        })
        .catch(error =>{
          setError('true')
        })
  }
    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Le nom d'utilisateur ou le mot de passe est incorrect</center></strong>
        </Alert>
    )

    return (
      <div>
        <div className="d-flex align-items-center auth px-0 mainLogin">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                    { showError() }
                </div>
                <h4 className="font-weight-dark text-center">Se connect pour continuer.</h4>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                        type="email"
                        placeholder="Entrer votre nom d'utilisateur"
                        size="lg" className="h-auto"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                        type="password"
                        placeholder="Entrer votre Mot de passe"
                        size="lg"
                        className="h-auto"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mt-3">
                      <button
                          type="submit"
                          className="btn btn-primary mr-2 btn-fw"
                          onClick={(event) => isAuthenticate(event)}
                      >
                          Se connecter
                      </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )

}

export default Login
