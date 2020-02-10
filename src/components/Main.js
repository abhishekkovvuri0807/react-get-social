import React from 'react';
import '../styles/Main.css';
import Test from './Test';
import Help from './Help';
import Footer from './Footer';

// const tests = [1, 2, 3, 4];

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:
            {
                tests: [
                    {
                        id: 1,
                        testName: "Premium Test 1",
                        redirectUrl: "https://tutorme.com/"
                    },
                    {
                        id: 2,
                        testName: "Premium Test 2",
                        redirectUrl: "https://tutorme.com/"
                    },
                    {
                        id: 3,
                        testName: "Premium Test 3",
                        redirectUrl: "https://tutorme.com/"
                    },
                    {
                        id: 4,
                        testName: "Premium Test 4",
                        redirectUrl: "https://tutorme.com/"
                    },
                ]
            }
        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="main-logo">
                    <img src="http://www.get-social.ca/wp-content/uploads/2019/12/Get-Social-Logo-2.png" alt="logo"/>
                </div>
                <div className="content-header">
                    <div className="context-text">
                        <h1>Premium Tests</h1>
                        <div>
                            <p>These premium speaking tests will help you to prepare for the
                            speaking portion of the IELTS examination.</p>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="test-container">
                            {this.state.data.tests.map(t => <Test key={t.id} tests={t} />)}
                        </div>
                        <div className="help-container">
                            <Help />
                        </div>
                        <div className="footer-content">
                            <Footer />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default Main;