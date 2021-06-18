import React from 'react';
import {Link} from "react-router-dom";
import './Error404.css';

const Error404 = () => {
    return (
        <div className='error-container'>
            
            <h1>Erreur 404</h1>
            <p>La page demandée n'existe plus, cliquez <Link className="ici"to='/'>ICI</Link> pour revenir à l'accueil !</p>
        </div>
    );
};

export default Error404;