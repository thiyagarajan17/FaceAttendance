import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Modify.js';
import TopNavBar from './TopNavBar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Report from './Report.js';
import Add from './add.js';
import Attendance from './Attendance.js';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <TopNavBar />
                    <Route path="/Modify" component={Home} />
                    <Route path="/Attendance" component={Attendance} />
                    <Route path="/Report" component={Report} />
                    <Route path="/add" component={Add} />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));