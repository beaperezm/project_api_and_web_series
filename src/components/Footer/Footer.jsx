import React from "react";
import {AiFillGithub} from 'react-icons/ai';
import '../../styles/Footer.scss';

function Footer () {
    return (
        <div className="footer">
           <a href="https://github.com/torresmald" className="footer__link"><p className="footer__gitIcon"><AiFillGithub /> Jonathan Torres</p> </a> 
            <a href="https://github.com/beaperezm/" className="footer__link"><p className="footer__gitIcon"><AiFillGithub /> Beatriz Pérez-Medel León</p> </a>
        </div>
    )
}

export default Footer;