import React from 'react';
import '../styles/Help.css';

class Help extends React.Component {
    render() {
        return (
            <div className="help-content">
                <div className="help-sapce">
                    <div className="help-content-header">
                        <h2>Looking for more help?</h2>
                    </div>
                    <div className="help-test-content">
                        <p>We offer live tutoring sessions with English teachers at your convenience.
                        To learn more and book a session with one of our teachers 
                            click below.</p>
                        <div className="test-submit-content">
                            <div className="test-submit">
                                <a>Live Tutoring</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Help;