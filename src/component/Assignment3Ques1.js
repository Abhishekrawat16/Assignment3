import React from 'react';
import ShowName from './ShowName';


 class ShowHello extends React.Component {
  
     render(){
  return (
    <div>
      <h1> Hello </h1>  <ShowName name={this.props.name}/>
    </div>
  );
     }
}

export default ShowHello;
