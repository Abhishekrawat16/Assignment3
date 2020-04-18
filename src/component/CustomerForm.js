import React from 'react';


const CustomerForm=(props)=>{
    return  <div>
                <form onSubmit={props.addCust}>
                    Customer Id:&nbsp;<input type='number' value={props.currentCustId} onChange={props.updateCustId}></input>&nbsp;
                    Customer Name:&nbsp; <input type='text' value={props.currentCustName} onChange={props.updateCustName}></input>&nbsp;
                    Customer Address:&nbsp; <input type='text' value={props.currentCustAdd} onChange={props.updateCustAdd}></input><br/><br/>
                    <button type="submit">Add Customer</button>&nbsp;
                    <button type="button" onClick={props.showFilterValue}>Apply Filter</button>&nbsp;
                    <button type="button" onClick={props.resetFilter}>Reset Filter</button>
                    
                </form>
            </div>
}
export default CustomerForm;