import React from 'react';
import EmployeeComponent from './EmployeeComponent';
import EmployeeForm from './EmployeeForm';

class ShowEmpDetails extends React.Component{

    constructor(props){
        super(props);
        this.updateEmpName=this.updateEmpName.bind(this);
        this.updateEmpId=this.updateEmpId.bind(this);
        this.addEmp=this.addEmp.bind(this);
        this.state={
            employee:[{
                empId:1,
                empName:"Abhishek Rawat",
                empCompany:"Yash Technologies"
            }],
            currentEmpName:'',
            currentEmpId:''
        }
    }
    updateEmpName(newValue){
        this.setState({
            currentEmpName:newValue.target.value
        });
    }
    updateEmpId(newValue){
        this.setState({
            currentEmpId:newValue.target.value
        });
    }
    addEmp(event){
        event.preventDefault();
        document.getElementById('errMsg').textContent='';
        let employees=this.state.employee;
        let currentEmpName= this.state.currentEmpName;
        let currentEmpId= this.state.currentEmpId;
        var isRepeat=false;
        employees.forEach(emp=>{
            if(emp.empId==currentEmpId){
                isRepeat=true;
            }
        });
        if(currentEmpId!="" && currentEmpName!=""){
            if(!isRepeat){
                employees.push({empId:currentEmpId, empName:currentEmpName, empCompany:"Yash Technologies"});
                this.setState({
                    employee:employees,
                    currentEmpName:'',
                    currentEmpId:''
                });
            }
            else{
                document.getElementById('errMsg').setAttribute('style','color:red');
                document.getElementById('errMsg').textContent="Error: Duplicate Employee Id";
            }
        }
        else{
            document.getElementById('errMsg').setAttribute('style','color:red');
            document.getElementById('errMsg').textContent="Error: All above fields are required ";
        }
    }
    render(){
        return(
            <div>
            <EmployeeForm updateEmpName={this.updateEmpName}
             updateEmpId={this.updateEmpId}
             addEmp={this.addEmp}
             currentEmpName={this.state.currentEmpName}
             currentEmpId={this.state.currentEmpId}/>
            <ul>
                {this.state.employee.map((emp)=>{
                    return <EmployeeComponent key={emp.empId} emp={emp}/>
                })
                }
            </ul>
            <a id='errMsg'></a> 
            </div>
        );
    }
}

export default ShowEmpDetails;