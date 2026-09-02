import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Nahuel61920'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://github.com/hautran2005/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/tr_hawb/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=0337062812" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);