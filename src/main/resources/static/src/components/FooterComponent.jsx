import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Made by <a href='https://www.linkedin.com/in/diptendu-biswas-734988192/'>Diptendu </a>©2022</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
