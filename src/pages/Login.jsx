import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../API/Api";
import { useNavigate } from 'react-router-dom';


async function LoginUser(credentials) {
    return fetch(BASE_URL + `/auth/signin`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = () => {
    const [userName, setUsername] = useState()
    const [passWord, setPassword] = useState()
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();

        const loginData = {
            username: userName,
            password: passWord
        };

        axios.post(BASE_URL + `/auth/signin`, loginData)
            .then(response => {
                // Save JWT token to local storage
                localStorage.setItem('token', response.data.access_token);

                // Redirect to dashboard or any protected page
                navigate('/professeurs');
            })
            .catch(error => {
                console.log(error);
                // Display error message to user
            });
    }


    // const login = () => {
    //     let formData = new FormData()
    //     formData.append("username", userName)
    //     formData.append("password", passWord)

    //     axios.post(BASE_URL + `/auth/signin`, formData)
    //         .then(function (response) {
    //             console.log("hello")
    //         })
    // }





    return (
        <>
            {/* <div className="flex flex-col justify-center h-screen"> */}
            <div className="flex flex justify-center mt-[4%]">
                <div className="card rounded-2xl bg-white w-full lg:max-w-5xl sm:max-w-3xl border-2 p-2">
                    <div className="grid grid-cols-5 grid-flow-row gap-2">
                        <div className="rounded-2xl col-span-2">
                            <div className="card text-white rounded-2xl container bg-blue-500 max-w-3xl mx-auto p-10 h-full">
                                <div className="mt-10 font-bold text-4xl">
                                    Gestion salle de classe
                                </div>
                                <div className="mt-3">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                                </div>
                                <div className="card bg-purple-800 rounded-2xl p-3 mt-10">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 flex flex-col justify-center h-full">
                            <div className="card container rounded-2xl max-w-md mx-auto mr-[50%]">
                                <div className="w-full max-w-xl">
                                    <h1 className="text-left text-bold text-3xl">Veuillez vous connecter.</h1>
                                    <form className="bg-white rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                                        <div className="flex flex-col mb-5">
                                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="username" placeholder="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} required />
                                        </div>

                                        <div className="flex flex-col mb-5">
                                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="password" name="passsword" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} required />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                                            >Se connecter
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Login