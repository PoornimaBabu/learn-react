import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        return (
            <div>
                {console.log("REGULAR COMPONENT")}
                Regular Component {this.props.name}

            </div>
        )
    }
}

export default RegComp
