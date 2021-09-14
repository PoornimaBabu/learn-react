import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            name: 'Poornima'
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({name: 'Poornima'})
        },2000)
    }

    render() {
        return (
            <div>                
                {console.log("----------PARENT COMPONENT----------")}
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
