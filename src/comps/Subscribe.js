import React, {Component} from 'react';

class Subscribe extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

     handleClick(){
        this.setState({
            message: "You have subscribed!"
        })
    }

    render(){
       return (
        <div>
           <h1>{this.state.message}</h1>
           <button onClick={(e) => {this.handleClick()}}>Subscribe</button>
        </div>
       )

       
    }   
}

export default Subscribe;