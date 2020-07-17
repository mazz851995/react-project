import React, { Component } from 'react'

export default class AboutUs extends Component {

    render() {
        return (
            <div className="aboutUs">
                    <h2>{this.props.name}</h2>
            </div>
        )
    }
}
