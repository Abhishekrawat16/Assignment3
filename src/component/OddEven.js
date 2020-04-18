import React from 'react';
import OddEvenForm from './OddEvenForm';

class OddEven extends React.Component{

    constructor(props){
        super(props);
        // this.addNumber=this.addNumber.bind(this);
        this.state={
            numArr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    }

    // addNumber(){
    //     let currentNum=document.getElementById('num').value;
    //     if(currentNum!=''){
    //     let numArr=this.state.numArr;
    //     numArr.push(parseInt(currentNum));
    //     this.setState={
    //         numArr:numArr
    //     }
    //     // document.getElementById('numArr').textContent=numArr;
    //     // document.getElementById('num').value='';
    //     }
    // }
    render(){
        return(
            <div>
                Number Array    : "[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]"
                {/* <OddEvenForm  addNumber={this.addNumber}/> */}
                <ul>
                    Odd Number: &nbsp;
                {this.state.numArr.filter(function(num){
                    return num%2!=0;
                }).map(function(num){
                    return <a>{num},</a>;
                })
                }<br/>
                Even Number: &nbsp;
                {this.state.numArr.filter(function(num){
                    return num%2==0;
                }).map(function(num){
                    return <a>{num},</a>;
                })
                }
                </ul>
            </div>
        );
    }
}

export default OddEven;