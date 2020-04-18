import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ShowHello from './component/Assignment3Ques1';
import LogoViewer from './component/LogoViewer';
import ShowEmpDetails from './component/EmployeeDetails';
import OddEven from './component/OddEven';
import ShowCustDetails from './component/CustomerDetails'
// var user={name:"John Cena",
// uid:"johnCn",
// pic:"./john.jpg"
// };

ReactDOM.render(
    <div>
      <u>Solution 1</u>
      <ShowHello name="Abhishek Rawat"/>
      <hr/>
      <u>Solution 2</u>
      <LogoViewer />
      <hr/>
      <u>Solution 3</u>
      <ShowEmpDetails />
      <hr/>
      <u>Solution 4</u>
      <OddEven />
      <hr/>
      <u>Solution 5</u>
      <ShowCustDetails />
    </div>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
