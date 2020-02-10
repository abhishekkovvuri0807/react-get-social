import React from 'react';
import '../styles/Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab);


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">

                </div>
                <div className="footer-links">
                    <div className="footer-icons">
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                    <div className="footer-ref">
                        <p id="footer-info">Designed by &nbsp;
                        <a href="#" title=""> Elegant Themes</a> | Powered by <a href="#">WordPress</a>
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;