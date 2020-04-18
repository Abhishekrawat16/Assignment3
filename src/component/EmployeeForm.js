import React from 'react';


const EmployeeForm=(props)=>{
    return  <div>
                <form onSubmit={props.addEmp}>
                    Employee Id:&nbsp;<input type='number' value={props.currentEmpId} onChange={props.updateEmpId}></input>&nbsp;
                    Employee Name:&nbsp; <input type='text' value={props.currentEmpName} onChange={props.updateEmpName}></input><br/><br/>
                    <button type="submit">Add Employee</button>
                </form>
            </div>
}
export default EmployeeForm;