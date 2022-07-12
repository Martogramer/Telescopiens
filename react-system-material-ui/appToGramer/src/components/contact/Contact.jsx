import React from "react";
import './contact.css'
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';


const Contacto = () => {
    return(
        <div className="contact">
            <div className="title">
                <h3>¿Tienes preguntas?</h3>
                <h1>Ponte en contacto</h1>
            </div>
            <div className="container">
                
                <form action="">
                    <input type="text" name="name" placeholcer="Nombre" required/>
                    <input type="email" name="email" placeholcer="Email" required/>
                    <textarea name="mensaje" placeholder="Mensaje" cols="30" rows="10" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>







            {/* <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Contactate</b> conmigo para discutir tu propuesta.
                    </p>
                    <form>
                        <div>
                            <div>
                            <input type="text" placeholder="Name" name="user_name"></input>
                            </div>
                            <div>
                            <input type="text" placeholder="Email" name="user_email"></input>
                            </div>
                            <div>
                            <input type="text" placeholder="Subjet" name="user_subjet"></input>
                            </div>
                            <textarea rows="5" placeholder="Mensaje" name="mensaje"/>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
        ) 
        
};

export default Contacto;
