import React from 'react';


class OddEvenForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <input id='num' type='number'></input>
            <button type='submit' onClick={this.props.addNumber}>Add Number</button>
            </div>        
        );
    }
}

export default OddEvenForm;