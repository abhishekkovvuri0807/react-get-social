import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div style = {headerStyle.headerCss}>
                <h1>HEADER</h1>
            </div>
        )
    }
}


const headerStyle = {
    headerCss: {
        backgroundColor: 'white',
        display: 'none'
    },
    

}

export default Header;