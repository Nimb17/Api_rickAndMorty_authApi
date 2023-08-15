import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export const ContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const [resultCharacter, setResultCharacter] = useState([])
    const [resultLocation, setResultLocation] = useState([])
    const [resultEpisode, setResultEpisode] = useState([])
    const [Auth, setAuth] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token" || false) )
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState();
    const [errorLogin, setErrorLogin] = useState();


    const handleLogin = (token) => {
        /* setAuth(!Auth); */
        setToken(token);
        token && navigate("/")
    };

    const handleRegister = (id, token) => {
        setId(id);
        setToken(token);
        id && navigate("/")
    };

    const handleLogout = () => {
        /* setAuth(!Auth); */
        localStorage.removeItem("token");
        setToken(false);       
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        const payload = {
            email,
            password
        };

        try {
            const response = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                handleLogin(data.token);
                setErrorLogin(data.error)

            } else {
                console.error("Algo salió mal");
            }
        } catch (error) {
            console.error("Ocurrio un error", error);
        }

        setLoading(false)
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        setLoading(true) 

        const payload = {
            email,
            password
        };

        try {
            const response = await fetch("https://reqres.in/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                setErrorRegister(data.error)
                handleRegister(data.id);
                setToken(data.token);

            } else {
                console.error("Algo salió mal");
            }
        } catch (error) {
            console.error("Ocurrio un error", error);
        }

        setLoading(false)
    };



    /* ::::::::::::::::: CHARACTER_API ::::::::::::::::: */

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then(resp => resp.json())
            .then(respuesta => { setResultCharacter(respuesta.results) })            
    }, [])    

    /* ::::::::::::::::: LOCATION_API ::::::::::::::::: */

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location`)
            .then(resp => resp.json())
            .then(respuesta => { setResultLocation(respuesta.results) })
    }, [])

    /* ::::::::::::::::: EPISODE_API ::::::::::::::::: */

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode`)
            .then(resp => resp.json())
            .then(respuesta => { setResultEpisode(respuesta.results) })
    }, [])    

    return (
        <Context.Provider
            value={{
                resultCharacter,
                resultLocation,
                resultEpisode,
                handleLogin,
                handleLogout,
                Auth,
                token,
                id,
                setAuth,
                setEmail,
                setPassword,
                email,
                password,
                handleLoginSubmit,
                handleRegisterSubmit,
                errorRegister,
                errorLogin,
                loading
            }}>
            {children}
        </Context.Provider>
    )
}

export const ApiContext = () => {
    return useContext(Context);
}