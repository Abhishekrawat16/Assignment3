import React from 'react';

 class ShowBadgeImage extends React.Component {
     render(){
  return (
    <div className="App">
        <img src={this.props.pic} className="App-logo" alt="logo" /><br/>
        <ShowBadgeName name="John Cena"/>
        <ShowBadgeId uId="johnCN"/>
    </div>
  );
     }
}

class ShowBadgeName extends React.Component {
    render(){
 return (
   <div className="App">
       Name: {this.props.name}<br/>
   </div>
 );
    }
}
class ShowBadgeId extends React.Component {
    render(){
 return (
   <div className="App">
       UserId: {this.props.uId}
   </div>
 );
    }
}

export default ShowBadgeImage;
