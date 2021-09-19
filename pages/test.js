import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import queryString from 'query-string'

import Context from "../../context";
import { LoginProvider } from "../../providers";
import { Button, Input, Alert, DataCardV2, PasswordInput, FormGroup, Loader } from "../../components";

import "./_Styles.scss";
import { authTokenValidate, authCreateCustomer } from "../../services/sofriAuthServcie";
import WebviewService from "../../services/webviewService";
import { AuthService } from "../../services";
import config from "../../config/config";
import Axios from "axios";

const Index = ({ match, location }) => {
    const { state } = useContext(Context);
    const { clientInfo } = state || {};
    const clientName = clientInfo ? "Sofri" : "Sofri";
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [pass, setPass] = useState('') // Olanicmi2013

    const [authInfo, setAuthInfo] = useState({
        Email: "",
        Token: ""
    })

    let clientId = config.client.client_id

    const asClientData = {
        clientId: clientId,
        email: "merchantportal_citihomes@indicina.co",
        password: "Expr3ss",
    }

    let queries = queryString.parse(location.search)

    let history = useHistory()


    useEffect(() => {
        let tokenWeb = localStorage.getItem('WebviewAuth')

        if (tokenWeb) {
            localStorage.removeItem("WebviewAuth")
        }
    }, [])

    useEffect(() => {
        setAuthInfo(queries)

        if (queries.email !== "" && queries.token !== "") {
            const data = {
                Email: queries.Email,
                Token: queries.Token,
            }
            handleAuthTokenValidate(data)

            console.log(queries, "queries")
        } else if (queries.email === "" && queries.token === "") {
            setErrorMessage('Invalid Authorization')
        } else return;

        // fetch('https://apps.dlm.group/BankOneISWDBAPI2/api/GetUserAuthToken', {
        //     method: "POST",
        //     headers: {
        //       Accept: 'application/json',
        //       'Content-Type': 'application/json',
        //       "DLM-SECURE": "S86FONY2MWCQ7ZH:e9dc6075-b0ac-4888-9414-2a0818ff2af5",
        //       'Access-Control-Allow-Origin' : '*',
        //       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //       'Access-Control-Allow-Origin':  'http://localhost:2400/'
        //   },
        //   body: JSON.stringify({Email: "efelix@dlm.com", UserId:"FEEVAN1"}),
        // })
        // .then(response => response.json())
        // .then(response => console.log(response, "response"))

    }, [])


    console.log(authInfo, "authInfo")

    const loginUserHandler = async (data) => {
        const { email, password } = data

        const response = await Axios({
            url: config.ignite.api_url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                query: `
          mutation ($input: AccountLoginInput!){ 
            login(input: $input) 
              { token }
          }
        `,
                variables: {
                    "input": {
                        "clientId": clientId,
                        "email": email,
                        "password": password,
                    }
                }
            }
        });


        // console.log(response, "response 201")


        if (response && response.data.data.login != null) {
            const { token } = response.data.data.login

            if (token != "" && token != null) {

                let authCreds = {
                    apiKey: token,
                };

                localStorage.setItem("Auth", JSON.stringify(authCreds));
                history.push("/dashboard");
            }
            if (token && token === "") {
                localStorage.removeItem("Auth")
            }
        }

        if (response && response.data && response.data.errors) {
            response.data.errors.forEach(err => {
                switch (err.message) {
                    case "Cannot find a user with this email under the provided client":
                        setErrorMessage("Invalid Email auth");
                        localStorage.removeItem("Auth")
                        break;
                    case "Invalid password":
                        setErrorMessage("Invalid Email/Password auth");
                        localStorage.removeItem("Auth")
                        break;
                    default:
                        setErrorMessage("We're unable to log you in now. Please try again later. auth");
                        localStorage.removeItem("Auth")
                }
            })
        }

    }

    const authAdminNode = async (CustomerDetails, authEmail) => {
        const { email, clientId, password } = asClientData;

        const response = await Axios({
            url: config.ignite.api_url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                query: `
            mutation ($input: AccountLoginInput!){ 
              login(input: $input) 
                { token }
            }
          `,
                variables: {
                    "input": {
                        "clientId": clientId,
                        "email": email,
                        "password": password,
                        "asClient": true
                    }
                }
            }
        });


        if (response && response.data.data.login != null) {
            const { token } = response.data.data.login
            let empty = ""

            if (token && token != "" && token != null) {
                localStorage.setItem("WebviewAuth", JSON.stringify(token));

                let userData = {
                    clientId: clientId,
                    email: authEmail,
                    password: CustomerDetails || pass
                }

                console.log(userData, "userData")

                confirmUserEmailAction(userData)
            }

            if (token && token === "") {
                localStorage.removeItem("WebviewAuth");
            }

            // else {
            //   localStorage.setItem("WebviewAuth", JSON.stringify(""));
            //   localStorage.removeItem("WebviewAuth");
            // }
        }

        if (response && response.data && response.data.errors) {
            response.data.errors.forEach(err => {
                switch (err.message) {
                    case "Cannot find a user with this email under the provided client":
                        setErrorMessage("Invalid Email");
                        localStorage.removeItem("WebviewAuth");
                        break;
                    case "Invalid password":
                        setErrorMessage("Invalid Email/Password");
                        localStorage.removeItem("WebviewAuth");
                        break;
                    default:
                        setErrorMessage("We're unable to log you in now. Please try again later.");
                        localStorage.removeItem("WebviewAuth");
                }
            })
        }
    }


    const confirmUserEmailAction = async (data) => {
        const { email } = data

        const token = await JSON.parse(localStorage.getItem('WebviewAuth'));

        const response = await Axios({
            url: config.ignite.api_url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            data: {
                query: `
        query ApplicationsSearch($cursor: ConnectionCursor $first: ConnectionLimitInt $where: ApplicationWhereInput $orderBy: ApplicationOrderByInput) {
          viewer { 
              account {
                  customerApplications ( 
                      first: $first 
                      after: $cursor 
                      orderBy: $orderBy 
                      where: $where 
                  ) {
                      pageInfo { 
                          startCursor 
                          endCursor 
                          hasNextPage 
                          hasPreviousPage 
                      } 
                      nodes { 
                          id 
                            applicationNumber 
                            amount 
                            baseAmount 
                            taxAmount 
                            fullAmount 
                            chargesAmount
                      }
                  }
              }
          }
        }
      `,
                variables: {
                    "first": 20,
                    "orderBy": "createdAt_DESC",
                    "where": {
                        "customer": {
                            "email": email
                        }
                    }
                }
            }
        });

        const { nodes } = response.data.data.viewer.account.customerApplications

        if (nodes && nodes.length > 0) {
            // login user
            loginUserHandler(data)
        } else {
            history.push('sign-up')
        }

        console.log(response, "response 1111")
        // console.log(token, "token 1111")
    }


    const handleAuthTokenValidate = async (data) => {

        const authData = {
            Email: data.Email,
            Token: data.Token,
        }

        let authEmail = data.Email

        await authTokenValidate(authData)
            .then(response => response.json())
            .then(response => {
                console.log(response, "response auth")
                if (response && response.Status === "VALID") {
                    const { CustomerDetails } = response
                    setPass(CustomerDetails)
                    authAdminNode(CustomerDetails, authEmail)
                } else {
                    console.log("Invalid Token", "error")
                }
            })
            .catch(error => console.log(error, "error"))
    }


    return (
        <section className="container welcome-screen">
            <DataCardV2>
                {loading && <Loader />}
                {errorMessage && (
                    <div>
                        {errorMessage}
                    </div>
                )}
            </DataCardV2>
        </section>
    );
};

export default withRouter(Index);



// let userData = {
//   clientId: clientId, 
//   email: authInfo.Email, 
//   password: CustomerDetails || pass 
// }

// console.log(userData, "userData")