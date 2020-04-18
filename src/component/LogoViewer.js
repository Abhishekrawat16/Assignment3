import React from 'react';

class LogoViewer extends React.Component{
    render(){
        return(
            <div>
                <div id='logo' >
                    <img src='./yash.jpg' alt="logo"/><br/>
                    <a>Agile Board</a><br/>
                </div>
                <div id= 'menu'>
                    <a href="#">Home</a>|&nbsp;
                    <a href="#">About&nbsp;</a>|&nbsp;
                    <a href="#">Service&nbsp;</a>|&nbsp;
                    <a href="#">Contact&nbsp;</a>
                </div>
                <div id="search">
                    <form>
                        <input type="test" id="searchValue"></input> &nbsp;
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div>
                    <table border='1' id="teamDetails">
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Scrum Master</th>
                                <th>Team Members</th>
                            </tr>
                            <tr>
                                <td>101</td>
                                <td>TCI</td>
                                <td>John</td>
                                <td>12  </td>
                            </tr>
                            <tr>
                                <td>
                                <a href="#">Edit&nbsp;</a>|&nbsp;
                                <a href="#">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default LogoViewer;