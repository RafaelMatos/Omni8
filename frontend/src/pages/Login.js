import React,{ useState} from 'react';

import logo from '../assets/logo.svg';
import './Login.css';

import api from '../services/api'

export default function Login({history}) {

    const [username, setUsername] = useState('')

    async function handleSubmit(e){
        e.preventDefault()

        const response = await api.post('/devs',{
          username,
        })
        
        const { _id } = response.data

        history.push(`/dev/${_id}`)
    }


    return (

      <div className="login-container">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <img src={logo}  alt="Tindev" />
            <input 
              placeholder="Digite seu usuário do Github" 
              value={username} 
              onChange = {e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>

    )
}