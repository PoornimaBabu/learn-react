import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                {/* {console.log("PURE COMPONENT")} */}
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
