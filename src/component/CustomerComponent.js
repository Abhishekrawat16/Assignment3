import React from 'react';

class CustomerComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li>Id:&nbsp;{this.props.cust.custId} &nbsp;|
            &nbsp;Name:&nbsp;{this.props.cust.custName} &nbsp;|
            &nbsp;Address:&nbsp;{this.props.cust.custAddress}</li>           
        );
    }
}

export default CustomerComponent;