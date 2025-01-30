import { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import './form.css'

const fetchUserDetails = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);

        if (response.status !== 200) {
            throw new Error(`Erro na requisição. Status: ${response.status}`);
        }

        return response.data;

    } catch (error) {
        console.error(`${error.message}`);
    }
}

const FormUser = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ userData, setUserData ] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState("");

    const onSubmitForm = async (data) => {
        setUserData(null);
        setErrorMessage("");

        const user = await fetchUserDetails(data.username);

        if (user) {
            setUserData(user);
        } else {
            setErrorMessage("Usuário não encontrado!");
        }
    }

    return (
        <div className="container">
            <img className="logo" src={`${import.meta.env.BASE_URL}images/github-logo.svg`} alt="Logo do GitHub" />
            <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
                <label className="label" htmlFor="username">Usuário no GitHub (*): 
                    <input
                        className={`input ${errors.username ? 'input-error' : ''}`} 
                        type="text" 
                        id="username"
                        placeholder="Insira aqui ..."
                        {
                            ...register("username", {
                                required: "Insira um usuário para prosseguir!"
                            })
                        } 
                    />
                    {errors.username && <span className="error-input-message">{errors.username.message}</span>}
                </label>
                <p className="orientation-message">(*) Campo obrigatório</p>
                <input className="btn-submit" type="submit" value="Pesquisar usuário" />
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {userData && 
                <div className="user-details-container">
                    <img className="user-image" src={userData.avatar_url} alt={userData.name} />
                    <section className="user-infos">
                        <h2 className="username">{userData.name ? userData.name : "Sem nome"}</h2>
                        <p className="bio">
                            <img className="quotes left" src={`${import.meta.env.BASE_URL}images/quotation-marks.png`} alt="Aspas iniciais" />
                            {userData.bio ? userData.bio : "Sem bio"}
                            <img className="quotes right" src={`${import.meta.env.BASE_URL}images/quotation-marks.png`} alt="Aspas finais" />
                        </p>
                        <p className="followers">👥 Seguidores: {userData.followers}</p>
                        <p className="following">📌 Seguindo: {userData.following}</p>
                        <p className="repos">📦 Repositórios públicos: {userData.public_repos}</p>
                        <p>🚀 <a className="user-link" href={userData.html_url} target="_blank">Perfil de {userData.login} no GitHub</a></p>
                    </section>
                </div>
            }
        </div>
    )
}

export default FormUser