import React from 'react';
import '../styles/Test.css';

class Test extends React.Component {


    constructor(props) {
        super(props);
        console.log(this.props.tests);
    }
    render() {
        return (
            <div className="test-item" key={this.props.tests.id}>
                <div className="test-item-header">
                    <div className="test-item-header-image">
                        <a href="#">
                            <img src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_8.jpg" alt="test" />
                        </a>
                    </div>
                    <div className="test-item-header-text">
                        <a key={this.props.tests.id} href={this.props.tests.redirectUrl}>
                            <h4 key={this.props.tests.id}>{this.props.tests.testName}</h4>
                        </a>
                    </div>

                </div>
                <div className="test-content">
                    <p>Duis egestas aliquet aliquet. Maecenas erat
                        eros, fringilla et leo eget, viverra pretium nulla.
                        Quisque sed augue tincidunt, posuere dui
                        tempor, dapibus nisi.Donec vel lectus.</p>
                    <p className="test-start"><strong>START NOW</strong></p>
                </div >
            </div >
        )
    }
}


export default Test;