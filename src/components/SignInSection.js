import React from 'react';
import { Link } from 'react-router-dom';

const SignInSection = props => {
    return (
        <section className="registration">
        <div className="registration__container">
        <div className="title__container">
            <Link to="/" style={{ textDecoration: 'none' }}><h1 className="registration__title">shops.</h1></Link>
        </div>
        <div className="registration__wrap">
        <div className="registration__links">
            <div className="registre__se">
            <span className="registre__se__wrap">
            <Link to="/registration" style={{ textDecoration: 'none', color: '#777' }} className="link"><h3>registre-se</h3></Link>
            </span>
            </div>
            <div  style={{ borderBottom: '2px solid #000' }} className="sign__in"><h3>sign in</h3></div>
        </div>
        <form style={{ marginTop: '5%' }}>
        <label htmlFor="email">endereço de email:</label>
            <input type="email" required/>
        <label htmlFor="password">senha:</label>
            <input type="password" required/>
            <button type="submit" className="btn__registre__se">entrar</button>
            <Link className="esqueceu__password"><h3>Esqueceu a senha?</h3></Link>
        </form>
        </div>
        </div>
        </section>
    );
};

export default SignInSection;
