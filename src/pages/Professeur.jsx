import Navbar from "../components/Navbar";
import ProfItem from "../components/ProfItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../API/Api";

const Professeur = () => {
    const navigate = useNavigate()
    const [profs, setProfs] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const token = localStorage.getItem('token');

    // Check if logged in
    const isLoggedIn = () => {
        if (!token) {
            navigate('/')
        }
    }

    // Get all prof

    const getAllProfs = async () => {
        await axios.get(BASE_URL + `/professeurs`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setProfs(response.data)
            }).catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        isLoggedIn()
        getAllProfs()
    }, [])

    return (<>
        <Navbar />
        <div className="mt-10 text-start">
            <h1 className="text-3xl mb-5">Section Professeurs</h1>
        </div>

        <div className="flex flex-row gap-5">
            {/** Displaying data for professors */}
            <div className="border-2">
                {/** Data titles */}
                <div className="grid grid-cols-5 gap-10 border-b p-3">
                    <h1 className="font-bold text-2xl text-start">Code Prof</h1>
                    <h1 className="font-bold text-2xl text-start">Noms</h1>
                    <h1 className="font-bold text-2xl text-start">Prénoms</h1>
                    <h1 className="font-bold text-2xl text-start">Grade</h1>
                    <h1 className="font-bold text-2xl">Actions</h1>
                </div>
                {/** Datas */}
                <div className="grid grid-cols-5 gap-10">
                    {
                        profs.map(prof => (
                            <ProfItem key={prof.id} codeprof={prof.codeprof} nom={prof.nom} prenom={prof.prenom} grade={prof.grade} />
                        ))
                    }


                </div>
            </div>
            {/** Forms */}
            <div className="flex-1 flex-col">
                <div><h1 className="text-start text-2xl">Ajouter informations:</h1></div>
                <form className="bg-white rounded pt-6 pb-8 mb-4">
                    <div className="flex flex-col mb-5">
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" placeholder="Noms" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" placeholder="Prénoms" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" placeholder="Grade" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                        >Valider
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default Professeur