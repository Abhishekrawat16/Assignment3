import React from 'react';
import CustomerComponent from './CustomerComponent';
import CustomerForm from './CustomerForm';

class ShowCustDetails extends React.Component{

    constructor(props){
        super(props);
        this.updateCustName=this.updateCustName.bind(this);
        this.updateCustId=this.updateCustId.bind(this);
        this.updateCustAdd=this.updateCustAdd.bind(this);
        this.showFilterValue=this.showFilterValue.bind(this);
        this.resetFilter=this.resetFilter.bind(this);
        this.addCust=this.addCust.bind(this);
        this.state={
            customer:[{
                custId:1,
                custName:"Abhishek Rawat",
                custAddress:"Indore, India"
            }],
            customerCopy:[],
            currentCustName:'',
            currentCustId:'',
            currentCustAdd:''
        }
    }
    updateCustName(newValue){
        this.setState({
            currentCustName:newValue.target.value
        });
    }
    updateCustId(newValue){
        this.setState({
            currentCustId:newValue.target.value
        });
    }
    updateCustAdd(newValue){
        this.setState({
            currentCustAdd:newValue.target.value
        });
    }
    addCust(event){
        event.preventDefault();
        document.getElementById('errMsgCust').textContent='';
        let customers=this.state.customer;
        let currentCustName= this.state.currentCustName;
        let currentCustId= this.state.currentCustId;
        let currentCustAdd=this.state.currentCustAdd;
        var isRepeat=false;
        customers.forEach(cust=>{
            if(cust.custId==currentCustId){
                isRepeat=true;
            }
        });
        if(currentCustId!="" && currentCustName!="" &&currentCustAdd!=''){
            if(!isRepeat){
                customers.push({custId:currentCustId, custName:currentCustName, custAddress:currentCustAdd});
                this.setState({
                    customer:customers,
                    currentCustName:'',
                    currentCustId:'',
                    currentCustAdd:''
                });
            }
            else{
                document.getElementById('errMsgCust').setAttribute('style','color:red');
                document.getElementById('errMsgCust').textContent="Error: Duplicate Customer Id";
            }
        }
        else{
            document.getElementById('errMsgCust').setAttribute('style','color:red');
            document.getElementById('errMsgCust').textContent="Error: All above fields are required ";
        }
    }

    showFilterValue(){
        document.getElementById('filterMsg').textContent="Below is the list of INDIAN customer who's name starts with A";
        this.state.customerCopy=this.state.customer;
        let customer= this.state.customer.filter(function(cust){
            var name=cust.custAddress.toUpperCase();
            return name.indexOf("INDIA")>-1 && cust.custName.toUpperCase().startsWith('A');
        })
        this.setState({
            customer:customer
        });
    }

    resetFilter(){
        document.getElementById('filterMsg').textContent="";
        this.setState({
            customer:this.state.customerCopy
        });
    }


    render(){
        return(
            <div>
            <CustomerForm updateCustName={this.updateCustName}
             updateCustId={this.updateCustId}
             updateCustAdd={this.updateCustAdd}
             addCust={this.addCust}
             currentCustName={this.state.currentCustName}
             currentCustId={this.state.currentCustId}
             currentCustAdd={this.state.currentCustAdd}
             showFilterValue={this.showFilterValue}
             resetFilter={this.resetFilter}/>
            <a id='filterMsg'></a> 
            <ul>
                {this.state.customer.map((cust)=>{
                    return <CustomerComponent key={cust.custId} cust={cust}/>
                })
                }
            </ul>
            <a id='errMsgCust'></a> 
            </div>
        );
    }
}

export default ShowCustDetails;