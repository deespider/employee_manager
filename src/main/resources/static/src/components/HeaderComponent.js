import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><img src='img/emp.png' height={40}/></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
